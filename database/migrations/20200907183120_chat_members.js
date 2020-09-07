
exports.up = function(knex) {
    return knex.schema.createTable('chat_members', function (table) {
        table.increments('id')
        table.integer('chat_id')
        table.integer('user_id')
        table.integer('contact_id')
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('chat_members')
};
