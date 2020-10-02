const {Group} = require('../../../../models/Group')
const {body, validationResult} = require('express-validator');

/**
 * Вывод групп по категории
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetByCategoryId = async (req, res) => {
    try {
        const user = req.user;
        const {categoryId} = req.params
        const {page} = req.query
        const pageSize = 10

        // Вывод групп
        const groups = await Group.query()
            .where({teacher_id: user.id, hide: null, category_id: categoryId})
            .modify('selectOnlyOutput')
            .page(page - 1, pageSize)

        // Последняя страница
        groups.last_page = Math.ceil(groups.total / pageSize)
        // Текущая страница
        groups.current_page = parseInt(page)

        return res.send(groups)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

/**
 * Вывод группы по Id
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetById = async (req, res) => {
    try {
        const {id} = req.params

        // Вывод группы
        const group = await Group.query()
            .findById(id)
            .modify('selectOnlyOutput')

        return res.send({data: [group]})
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

        // Создание группы
        const groupRef = await Group.query()
            .insertAndFetch({title, category_id, method_id, teacher_id: user.id})

        // Вывод группы
        const group = await Group.query()
            .findById(groupRef.id)
            .modify('selectOnlyOutput')

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

        // Обновление группы
        await Group.query()
            .updateAndFetchById(id, {title, category_id})

        // Вывод группы
        const group = await Group.query()
                .findById(id)
                .modify('selectOnlyOutput')

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

        // Обновление hide
        await Group.query()
            .updateAndFetchById(id, {hide: user.id})

        return res.send({status: 'success'})
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {GetByCategoryId, CreateValidate, Create, UpdateValidate, Update, Delete, GetById}