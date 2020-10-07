const {HomeworkTask} = require('models/homework/HomeworkTask')
const {HomeworkSent} = require('models/homework/HomeworkSent')
const SentController = require('controllers/teacher/homework/SentController')
const checkCountAll = require('utils/checkCountAll')

/**
 *
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetBySentId = async (req, res) => {
    try {
        const {sentId} = req.params

        const homeworkSent = await HomeworkSent.query()
            .findById(sentId)

        let tasks = await HomeworkTask.query()
            .whereRaw(`homework_id = ${homeworkSent.homework_id}`)
            .withGraphFetched('task')

        tasks = await Promise.all(tasks.map(async (task) => {
            return await SentController._UpdateResult(sentId, task, homeworkSent.user_id, true)
        }))

        return res.send(tasks)
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
const GetByHomeworkId = async (req, res) => {
    try {
        const {homeworkId} = req.params

        let tasks = await HomeworkTask.query()
            .where({homework_id: homeworkId})
            .withGraphFetched('task')

        tasks = tasks.map((task) => {
            task.count_all = checkCountAll(task.settings, task.discipline_id, task.task_id)
            return task
        })

        return res.send(tasks)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {GetBySentId, GetByHomeworkId}