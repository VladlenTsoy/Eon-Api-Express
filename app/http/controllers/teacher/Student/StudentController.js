const {Student} = require('../../../../models/users/Student')
const {_CheckBlock} = require('../../../../http/controllers/UserController')

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

        const students = await Student.query()
            .where({group_id: groupId, delete_id: null})
            .modify('selectOnlyTableOutput')

        const s = _CheckBlock(students)

        return res.send(s)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {GetByGroupId}