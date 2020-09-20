const {GetAlgorithmBySetting} = require('../../../../../resources/algorithm/Algorithm')
const {TrainingResult} = require('../../../../models/training/TrainingResult')
const {Language} = require('../../../../models/settings/Language')
const {pdfRender} = require('../../../../../resources/print/pdf')

const ProcessTotalsForPrint = async (user, data, setting) => {
    let task = 2

    const totals = data.map((value) => {
        let answer, number

        if (setting['mode'] === 'multiply' || setting['mode'] === 'divide') {
            task = 4
            if (setting['mode'] === 'multiply') {
                answer = value[0] * value[1];
                number = value[0] + ' * ' + value[1];
            } else {
                answer = value[0] / value[1];
                number = value[0] + ' / ' + value[1];
            }
            return {exercise: number, answer: answer};
        }

        answer = value.reduce((acc, val) => acc + val)
        return {exercise: value, answer: answer};
    })

    return TrainingResult.query()
        .insertAndFetch({
            user_id: user.id,
            task_id: task,
            settings: setting,
            print: 1,
            data: totals,
        })
}

const GetPrint = async (req, res) => {
    try {
        const user = req.user;
        const {setting} = req.body
        const exercises = GetAlgorithmBySetting.select(setting)
        const result = await ProcessTotalsForPrint(user, exercises, setting)

        const language = await Language.query().findOne({abbr: 'ru-RU'})

        const path = await pdfRender(result.settings, result, language.data.common)

        return res.send({path, id: result.id, setting});
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {GetPrint}