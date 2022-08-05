import express from 'express';
import bodyParser from 'body-parser';
import config from './config/index.js';
import { Model } from 'objection';

import knex from './knex.js';
Model.knex(knex);

import User from './database/models/user.model.js';

const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.get('/', (req, res) => {
    res.json({
        message: 'Success',
    });
});

app.get('/users', async (req, res) => {
    const users = await User.query();
    res.json({
        users,
    });
});

app.listen(config.PORT, () => {
    console.log(`Server starts on port ${config.PORT}!`);
});
