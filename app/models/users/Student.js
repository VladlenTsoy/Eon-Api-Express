const {User} = require('../User');
const {ref} = require('objection');

class Student extends User {
    static virtualAttributes = ['coins', 'url_image']

    static get modifiers() {
        const {Coin} = require('../settings/Coin')

        return {
            selectOnlyTableOutput(builder) {
                builder
                    .select(
                        'id', 'first_name', 'last_name', 'login', 'date_of_birth', 'entrance_at',
                        'image', 'email', 'phone', 'group_id',
                        Coin.query()
                            .where({
                                user_id: ref('users.id'),
                            })
                            .sum('coin')
                            .as('coins')
                    )
            }
        }
    }

    static get relationMappings() {
        return {}
    }
}

module.exports = {Student}