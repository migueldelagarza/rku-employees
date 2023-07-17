const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const config = require('./config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(`/`, (_, res) => res.send('works'));

app.listen(config.PORT, () => {
  console.log(`Microservicio v${config.VERSION} escuchando en el puerto ${config.PORT}`);
});
