
exports.up = function(knex) {
    return knex.schema.createTable('password_resets', function (table) {
        table.increments('id')
        table.string('email').notNullable()
        table.string('code').notNullable()
        table.dateTime('expires_at').notNullable()
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('password_resets')
};
