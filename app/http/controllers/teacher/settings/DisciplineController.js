const {Discipline} = require('models/settings/Discipline')

/**
 * Вывод всех дисциплин
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetAll = async (req, res) => {
    try {
        const user = req.user

        const disciplines = await Discipline.query()
            .whereIn('id', user.methods_id || [1])
            .select('id', 'title')

        return res.send(disciplines)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {GetAll}