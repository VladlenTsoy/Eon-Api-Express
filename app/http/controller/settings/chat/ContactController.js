const {User} = require('../../../../models/User');
const {body, validationResult} = require('express-validator');

/**
 * Проверка валидации
 */
const GetAllBySearchValidate = [
    body('search').not().isEmpty().withMessage('Введите Фамилию, Имя или ID!'),
];

/**
 * Поиск контакта
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetAllBySearch = async (req, res) => {
    // Ошибка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});

    try {
        const user = req.user;
        const {search} = req.body;

        // Студентов
        const students = await User.query()
            .where({delete_id: null, access: 'student'})
            .whereRaw(`
                group_id IN (
                    SELECT id FROM groups
                    WHERE teacher_id = ${user.id}
                    AND hide IS NULL
                )
            `)
            .modify('search', search)
            .modify('notBlocked')
            .modify('selectOnlyForContact')
            .withGraphFetched('group')

        return res.send(students);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {GetAllBySearchValidate, GetAllBySearch}