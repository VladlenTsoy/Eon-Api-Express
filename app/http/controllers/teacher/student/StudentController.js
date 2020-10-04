const {Student} = require('../../../../models/users/Student')
const moment = require('moment')
const Jimp = require('jimp')
const path = require('path');
const {HomeworkSent} = require('../../../../models/homework/HomeworkSent')
const {HomeworkTask} = require('../../../../models/homework/HomeworkTask')
const UserController = require('../../../../http/controllers/UserController')
const SentController = require('../homework/SentController')
const {body, validationResult} = require('express-validator');
const fs = require("fs");

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

        return res.send([])
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
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

        if (date_of_birth)
            data.date_of_birth = moment(date_of_birth).format('YYYY-MM-DD')

        if (phone)
            data.phone = phone

        if (image && image.indexOf('base64') !== -1) {
            const checkStudent = await Student.query().findById(id)

            if (checkStudent.image && checkStudent.image.indexOf('default') === -1)
                await fs.unlinkSync(path.join(__dirname, `../../../../../public/${checkStudent.image}`))

            const buf = Buffer.from(image.replace(/^data:image\/\w+;base64,/, ""), 'base64')

            const imagePath = `images/users/${id}/profile.${moment().valueOf()}.png`;
            const fullImagePath = path.join(__dirname, `../../../../../public/${imagePath}`);
            const img = await Jimp.read(buf)
            await img.quality(75)
            if (img.getWidth() > 250)
                await img.resize(250, Jimp.AUTO)
            await img.writeAsync(fullImagePath)

            data.image = imagePath
        }

        const studentRef = await Student.query().updateAndFetchById(id, data)

        let student = await Student.query().findById(studentRef.id)
            .modify('selectOnlyTableOutput')
        student = await UserController._CheckBlock(student)

        return res.send(student)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {GetByGroupId, GetHomeworkDatesByGroupId, Update, UpdateValidate}