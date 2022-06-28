require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (_req, res) => {
    res.status(200).send(process.env.TEXTO || 'texto customizado vazio');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listen on port: ', port);
});