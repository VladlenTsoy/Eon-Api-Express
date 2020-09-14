const {User} = require('../../../../models/User');
const {Group} = require('../../../../models/Group');

const GetAllBySearch = async (req, res) => {
    try {
        const user = req.user;
        const {search} = req.body;

        //
        const groups = await Group.query()
            .where({teacher_id: user.id, hide: null})
            .select('id')
            .pluck('id')

        const students = await User.query()
            .where({delete_id: null, access: 'student'})
            .whereIn('group_id', groups)
            .withGraphFetched('group')
            .modify('search', search)
            .modify('notBlocked')
            .modify('selectOnlyForContact')

        return res.send(students);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

module.exports = {GetAllBySearch}