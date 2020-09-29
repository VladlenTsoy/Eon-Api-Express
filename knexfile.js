// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    version: '5.8',
    jsonDatatype: 'JSON',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'eon_cabinet',
      charset  : 'utf8_general_ci'
    },
    migrations: {
      directory: `${__dirname}/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/database/seeds`
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
