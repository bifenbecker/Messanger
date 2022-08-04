import knexConfig from './knexfile.js';
import config from './config/index.js';
import knex from 'knex';

export default knex(knexConfig[config.ENV]);
