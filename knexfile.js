import config from './config/index.js';

export default {
    development: {
        client: 'pg',
        connection: {
            host: config.DB.host,
            database: config.DB.name,
            user: config.DB.user,
            password: config.DB.password,
        },
        migrations: {
            directory: './database/migrations',
        },
        seeds: {
            directory: './database/seeds/dev',
        },
    },

    test: {
        client: 'pg',
        connection: {
            host: config.DB.host,
            database: config.DB.name,
            user: config.DB.user,
            password: config.DB.password,
        },
        migrations: {
            directory: './database/migrations',
        },
        seeds: {
            directory: './database/seeds/test',
        },
    },

    prod: {
        client: 'postgresql',
        connection: {
            host: config.DB.host,
            database: config.DB.name,
            user: config.DB.user,
            password: config.DB.password,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
