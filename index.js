import express from 'express';
import bodyParser from 'body-parser';

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

app.listen(3001, () => {
    console.log('Server starts on port 3000!');
});
