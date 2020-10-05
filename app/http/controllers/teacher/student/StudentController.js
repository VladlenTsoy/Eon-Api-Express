const {Student} = require('models/users/Student')
const moment = require('moment')
const Jimp = require('jimp')
const path = require('path');
const {HomeworkSent} = require('models/homework/HomeworkSent')
const {HomeworkTask} = require('models/homework/HomeworkTask')
const UserController = require('controllers/UserController')
const SentController = require('../homework/SentController')
const {body, validationResult} = require('express-validator');
const {DeleteProfileImageQueue} = require("jobs/profile/delete-profile-image/DeleteProfileImageQueue");

/**
 * Вывод учеников по Group Id
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetByGroupId = async (req, res) => {
    try {
        const {groupId} = req.params

        let students = await Student.query()
            .where({group_id: groupId, delete_id: null})
            .modify('selectOnlyTableOutput')

        students = await UserController._CheckBlockUsers(students)

        return res.send(students)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

/**
 *
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetHomeworkDatesByGroupId = async (req, res) => {
    try {
        const {groupId} = req.params
        const {startOfWeek, endOfWeek} = req.body

        const students = await Student.query()
            .where({group_id: groupId, delete_id: null})

        let homeworkSent = await HomeworkSent.query()
            .whereIn('user_id', students.map(student => student.id))
            .whereBetween('created_at', [startOfWeek, endOfWeek])
            .select('id', 'homework_id', 'status', 'user_id', 'created_at')

        homeworkSent = await Promise.all(
            homeworkSent.map(async sent => {
                let tasks = await HomeworkTask.query()
                    .where('homework_id', sent.homework_id)
                tasks = await Promise.all(tasks.map(async (task) => {
                    return await SentController._UpdateResult(sent.id, task, sent.user_id, false)
                }))
                sent.week = moment(sent.created_at).day()
                sent.tasks = tasks
                return sent
            })
        )

        const groups = ['week', 'user_id'], grouped = {}

        homeworkSent.forEach(function (a) {
            groups.reduce(function (o, g, i) {
                o[a[g]] = o[a[g]] || (i + 1 === groups.length ? [] : {})
                return o[a[g]]
            }, grouped).push(a)
        })

        return res.send(grouped)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

const _UpdateProfileImage = async ({id, image}) => {
    // Вывод ученика для картинки
    const checkStudent = await Student.query().findById(id)
    // Удаление фотограции на очередь
    await DeleteProfileImageQueue({image: checkStudent.image})

    const buf = Buffer.from(image.replace(/^data:image\/\w+;base64,/, ""), 'base64')

    const imagePath = `images/users/${id}/profile.${moment().valueOf()}.png`;
    const fullImagePath = path.join(__dirname, `../../../../../public/${imagePath}`);
    const img = await Jimp.read(buf)
    await img.quality(75)
    if (img.getWidth() > 250)
        await img.resize(250, Jimp.AUTO)
    await img.writeAsync(fullImagePath)
    return imagePath
}

/**
 * Проверка валидации при создании чата
 */
const UpdateValidate = [
    body('group_id').not().isEmpty().withMessage('!'),
    body('last_name').not().isEmpty().withMessage('!'),
    body('first_name').not().isEmpty().withMessage('!'),
];

/**
 * Обновление данных ученика
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const Update = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    try {
        const {id} = req.params
        const {group_id, first_name, last_name, image, date_of_birth, phone} = req.body

        const data = {group_id, first_name, last_name}

        // Дата рождения
        if (date_of_birth)
            data.date_of_birth = moment(date_of_birth).format('YYYY-MM-DD')

        // Телефон
        if (phone)
            data.phone = phone

        // Фото
        if (image && image.indexOf('base64') !== -1)
            data.image = await _UpdateProfileImage({id, image})

        // Сохранение изменений
        const studentRef = await Student.query().updateAndFetchById(id, data)

        // Вывод студента
        let student = await Student.query().findById(studentRef.id)
            .modify('selectOnlyTableOutput')

        // Проверка наблокировку
        student = await UserController._CheckBlock(student)

        return res.send(student)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {GetByGroupId, GetHomeworkDatesByGroupId, Update, UpdateValidate}