const {GetAlgorithmBySetting} = require('../../../../../resources/algorithm/Algorithm')

const GetPrint = async (req, res) => {
    try {
        const {setting} = req.body
        const exercises = GetAlgorithmBySetting.select(setting)
        return res.send(exercises);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {GetPrint}