exports.up = function (knex) {
    return knex.schema.createTable('email_confirmations', function (table) {
        table.increments('id')
        table.integer('user_id').notNullable()
        table.string('email').notNullable()
        table.string('code').notNullable()
        table.dateTime('expires_at').notNullable()
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('email_confirmations')
};
