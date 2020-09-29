const {Group} = require('../../../../models/Group')
const {body, validationResult} = require('express-validator');

// Вывод групп по категории
const GetByCategoryId = async (req, res) => {
    try {
        const user = req.user;
        const {categoryId} = req.params
        const {page} = req.query
        const pageSize = 10

        // Вывод групп
        const groups = await Group.query()
            .where({
                teacher_id: user.id,
                hide: null,
                category_id: categoryId,
            })
            .withGraphFetched(`[
                category(),
                last_homework()
            ]`)
            .select('id', 'title')
            .page(page - 1, pageSize)

        groups.last_page = Math.ceil(groups.total / pageSize)
        groups.current_page = parseInt(page)

        return res.send(groups)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

/**
 * Проверка валидации
 */
const CreateValidate = [
    body('title').not().isEmpty().withMessage(''),
    body('category_id').not().isEmpty().withMessage(''),
    body('method_id').not().isEmpty().withMessage(''),
];

/**
 * Создать группу
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const Create = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    try {
        const user = req.user;
        const {title, category_id, method_id} = req.body

        const group = await Group.query()
            .insertAndFetch({title, category_id, method_id, teacher_id: user.id})
            .select('id', 'title')
            .withGraphFetched(`[
                category(),
                last_homework()
            ]`)

        return res.send(group)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}


/**
 * Проверка валидации
 */
const UpdateValidate = [
    body('title').not().isEmpty().withMessage(''),
    body('category_id').not().isEmpty().withMessage(''),
];


/**
 * Обновить группу
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
        const {title, category_id} = req.body

        const group = await Group.query()
            .updateAndFetchById(id, {title, category_id})
            .select('id', 'title')
            .withGraphFetched(`[
                category(),
                last_homework()
            ]`)

        return res.send(group)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

/**
 * Удалить
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const Delete = async (req, res) => {
    try {
        const {id} = req.params
        const user = req.user;

        await Group.query()
            .updateAndFetchById(id, {hide: user.id})

        return res.send({status: 'success'})
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {GetByCategoryId, CreateValidate, Create, UpdateValidate, Update, Delete}