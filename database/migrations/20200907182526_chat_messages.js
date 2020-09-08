exports.up = function (knex) {
    return knex.schema.createTable('chat_messages', function (table) {
        table.increments('id')
        table.integer('user_id').notNullable()
        table.integer('chat_id').notNullable()
        table.enum('status', ['new', 'view']).defaultTo('new').notNullable()
        table.text('message')
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('chat_messages')
};
