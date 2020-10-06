const {Homework} = require('models/homework/Homework')
const {HomeworkResult} = require('models/homework/HomeworkResult')
const checkCountAll = require('utils/checkCountAll')

/**
 *
 * @param sentId
 * @param task
 * @param userId
 * @param isTotals
 * @return {Promise<*>}
 * @private
 */
const _UpdateResult = async (sentId, task, userId, isTotals = false) => {
    const homework = await Homework.query().findById(task.homework_id)
    task.discipline_id = homework.method_id
    task.count_all = checkCountAll(task.settings, task.discipline_id, task.task_id)

    const result = await HomeworkResult.query().findOne({sent_id: sentId, task_id: task.id, user_id: userId})

    if (result) {
        const first = {
            count_success: result.result.countSuccess,
            exodus: result.result.exodus,
            view: result.view,
            created_at: result.created_at
        }

        if (isTotals)
            first.totals = result.totals

        task.first = first

        const secondResult = await HomeworkResult.query().findOne({sent_id: sentId, task_id: task.id, user_id: userId})
            .whereNotIn('id', [result.id])
            .orderBy('created_at', 'desc')

        if (secondResult) {
            const second = {
                count_success: secondResult.result.countSuccess,
                exodus: secondResult.result.exodus,
                view: secondResult.view,
                created_at: secondResult.created_at
            }

            if (isTotals)
                second.totals = secondResult.totals

            task.second = second
            task.chance = true
            task.created_at = secondResult.created_at
        }
    }
    return task;
}

module.exports = {_UpdateResult}