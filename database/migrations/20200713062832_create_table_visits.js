exports.up = function (knex) {
    return knex.schema.createTable('visits', function (table) {
        table.increments('id')
        table.integer('user_id').notNullable()
        table.string('ip').notNullable()
        table.string('browser').notNullable()
        table.string('browser_version').notNullable()
        table.string('device').notNullable()
        table.jsonb('screen').notNullable()
        table.dateTime('entrance_at').notNullable()
        table.dateTime('logout_at')
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('visits')
};
