const {Coin} = require('../../../../models/settings/Coin')

const Sent = async (req, res) => {
    try {
        const user = req.user
        const {ids, coin} = req.body

        await Promise.all(ids.map(async id => await Coin.query().insert({
            user_id: id,
            coin: coin,
            teacher_id: user.id
        })))

        return res.send({status: 'success'})
    } catch (e) {
        return res.status(500).send({message: e.message})

    }
}

module.exports = {Sent}