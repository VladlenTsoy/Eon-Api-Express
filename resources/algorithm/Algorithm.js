const shuffle = require('lodash/shuffle')
const Plus = require('../algorithm/plus/Plus')
const Minus = require('../algorithm/minus/Minus')
const PlusMinus = require('../algorithm/plus-minus/PlusMinus')
const Multiply = require('../algorithm/multiply/Multiply')
const Divide = require('../algorithm/divide/Divide')

const GetAlgorithmBySetting = {
    // Сумма
    amount: 0,
    // Текущий алгоритм
    currentAlgorithm: 0,
    // Следующий алгоритм
    nextAlgorithm: false,
    // Алгоритм
    algorithm: false,

    // Алгоритмы на плюс
    plus: Plus,
    minus: Minus,
    plusMinus: PlusMinus,
    multiply: Multiply,
    divide: Divide,

    selectModeAlgorithm(mode) {
        return mode === 'plus' ?
            this.plus() :
            mode === 'minus' ?
                this.minus() :
                mode === 'plus-minus' ?
                    this.plusMinus() :
                    mode === 'multiply' ?
                        this.multiply() :
                        mode === 'divide' ?
                            this.divide() : this.plus()
    },

    multiplicationAndDivision(param) {
        const algorithms = this.selectModeAlgorithm(param.mode)
        const theme = param.theme || false;
        return algorithms[param.length][param.type](theme)
    },

    additionAndSubtraction(param) {
        // Кол-во раз
        const setCount = param.rows || param.count
        // Вывод алгоритмов
        const response = [];
        // Алгоритмы
        const algorithms = this.selectModeAlgorithm(param.mode)

        let selectsAlgorithm = (algorithms[param.length][param.type][param.theme]);
        selectsAlgorithm = shuffle(selectsAlgorithm);

        // Текущий шаг
        let stepAlgorithm = 1

        for (let i = 1; i <= setCount; i++) {

            // Изменить шаг текущего алгоритма
            if (this.nextAlgorithm) {
                stepAlgorithm = 1;
                this.nextAlgorithm = false;
            }

            // Добавить цифру текущего алгоритма
            response.push(selectsAlgorithm[this.currentAlgorithm](stepAlgorithm, 0))

            // Следующий шаг алгоритма
            stepAlgorithm++;

            // Изменить текущий алгоритм
            if (i === setCount)
                this.currentAlgorithm++;

            if (this.currentAlgorithm >= selectsAlgorithm.length)
                this.currentAlgorithm = 0;

        }

        return response;
    },

    //
    select(setting) {
        const response = []
        const count = setting.mode === 'multiply' || setting.mode === 'divide' ?
            setting.tables * setting.column * setting.rows :
            setting.tables * setting.column

        for (let i = 1; i <= count; i++) {
            this.amount = 0;
            if (setting.mode === 'multiply' || setting.mode === 'divide')
                response.push(this.multiplicationAndDivision(setting))
            else
                response.push(this.additionAndSubtraction(setting))
        }

        return response
    }
}

module.exports = {GetAlgorithmBySetting}