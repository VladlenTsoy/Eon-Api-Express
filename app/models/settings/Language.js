const Model = require('../../../config/knex.config');
const moment = require('moment')

class Language extends Model {
    static tableName = 'languages'

    static get hidden() {
        return ['icon', 'created_at', 'updated_at'];
    }

    static get virtualAttributes() {
        return ['url_icon'];
    }

    url_icon() {
        if (this.icon)
            return process.env.APP_URL + '/' + this.icon;
    }

    $beforeInsert() {
        this.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }

    $beforeUpdate() {
        this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

module.exports = {Language}