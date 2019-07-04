const express = require('express');
const bodyParser = require('body-parser');
const db = require('./lib/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send({ john: 'doe' });
});

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
