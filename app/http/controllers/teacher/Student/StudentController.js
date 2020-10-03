const {Student} = require('../../../../models/users/Student')
const moment = require('moment')
const {HomeworkSent} = require('../../../../models/homework/HomeworkSent')
const {HomeworkTask} = require('../../../../models/homework/HomeworkTask')
const {_CheckBlock} = require('../../../../http/controllers/UserController')
const SentController = require('../../../../http/controllers/teacher/Homework/SentController')

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

        students = await _CheckBlock(students)

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

module.exports = {GetByGroupId, GetHomeworkDatesByGroupId}