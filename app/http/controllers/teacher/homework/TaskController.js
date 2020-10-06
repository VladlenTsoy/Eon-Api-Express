const {HomeworkTask} = require('models/homework/HomeworkTask')
const {HomeworkSent} = require('models/homework/HomeworkSent')
const SentController = require('controllers/teacher/homework/SentController')

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

module.exports = {GetBySentId}