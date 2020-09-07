exports.up = function (knex) {
    return knex.schema.createTable('chat_messages', function (table) {
        table.increments('id')
        table.integer('user_id')
        table.integer('chat_id')
        table.enum('status', ['new', 'view'])
        table.text('message')
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('chat_messages')
};
