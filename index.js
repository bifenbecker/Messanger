import express from 'express';
import bodyParser from 'body-parser';
import config from './config/index.js';

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

app.listen(config.PORT, () => {
    console.log(`Server starts on port ${config.PORT}!`);
});
