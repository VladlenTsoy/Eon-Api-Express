const plus = require('resources/algorithm/plus/Plus')
const minus = require('resources/algorithm/minus/Minus')
const plusMinus = require('resources/algorithm/plus-minus/PlusMinus')
const divide = require('resources/algorithm/divide/Divide')
const multiply = require('resources/algorithm/multiply/Multiply')

/**
 * Вывод алгоритмов
 * @param req
 * @param res
 * @return {Promise<*>}
 * @constructor
 */
const GetAll = async (req, res) => {
    try {
        const algorithms = {
            plus: plus(),
            minus: minus(),
            'plus-minus': plusMinus(),
            divide: divide(),
            multiply: multiply(),
        }
        return res.send(JSON.stringify(algorithms))
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {GetAll}