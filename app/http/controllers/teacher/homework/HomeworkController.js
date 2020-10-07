const {Homework} = require('models/homework/Homework')

/**
 * Вывод по категории
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetByCategory = async (req, res) => {
    try {
        const {categoryId} = req.params
        const {page} = req.query
        const user = req.user
        const pageSize = 10

       const homework = await Homework.query()
           .where({category_id: categoryId, teacher_id: user.id})
           .orderBy('level', 'desc')
           .select('category_id', 'created_at', 'description', 'id', 'level')
           .page(page - 1, pageSize)

        // Последняя страница
        homework.last_page = Math.ceil(homework.total / pageSize)
        // Текущая страница
        homework.current_page = parseInt(page)

        return res.send(homework)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
    }

module.exports = {GetByCategory}