const {Student} = require('models/users/Student')
const moment = require('moment')
const {HomeworkSent} = require('models/homework/HomeworkSent')
const {HomeworkTask} = require('models/homework/HomeworkTask')
const {HomeworkResult} = require('models/homework/HomeworkResult')
const UserController = require('controllers/UserController')
const {body, validationResult} = require('express-validator');
const {DeleteProfileImageQueue} = require("jobs/profile/delete-profile-image/DeleteProfileImageQueue");
const {UploadBase64} = require("services/profile/ProfileImageService");

/**
 * Загрузка фотографии
 * @param id
 * @param image
 * @return {Promise<string>}
 * @private
 */
const _UpdateProfileImage = async ({id, image}) => {
    // Вывод ученика для картинки
    const checkStudent = await Student.query().findById(id)
    // Удаление фотограции на очередь
    await DeleteProfileImageQueue({image: checkStudent.image})

    // Загрузка фотографий
    return await UploadBase64(image, id)
}

/**************************************************************************/

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
            .withGraphFetched('homework')
            .select('id', 'status', 'user_id', 'created_at')

        homeworkSent = await Promise.all(
            homeworkSent.map(async sent => {
                let tasks = await HomeworkTask.query()
                    .withGraphFetched('task')
                    .where('homework_id', sent.homework.id)

                const results = await HomeworkResult.query().whereIn('task_id', tasks.map(task => task.id))

                sent.count_all = tasks.length
                sent.count_success = results.length

                sent.week = moment(sent.created_at).day() - 1
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