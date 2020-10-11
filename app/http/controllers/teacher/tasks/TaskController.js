const {Task} = require('models/tasks/Task')

/**
 *
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetByDisciplineId = async (req, res) => {
    try {
        const {disciplineId} = req.params

        const tasks = await Task.query()
            .where({discipline_id: disciplineId, block: null})
            .orderBy('priority', 'asc')
            .select('id', 'title', 'discipline_id')

        res.send(tasks);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {GetByDisciplineId}