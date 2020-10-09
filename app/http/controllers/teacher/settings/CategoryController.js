const {Center} = require('models/Center')
const {Franchise} = require('models/Franchise')
const {Category} = require('models/settings/Category')

/**
 * Категории по дисциплине
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetByDisciplineId = async (req, res) => {
    try {
        const {disciplineId} = req.params
        const user = req.user

        const center = await Center.query().findById(user.center_id)
        const franchise = await Franchise.query().findById(center.franchise_id)

        const categories = await Category.query()
            .where({
                discipline_id: disciplineId,
                franchise_id: franchise.id
            })

        return res.send(categories)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {GetByDisciplineId}