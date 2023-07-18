const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.config');
const app = express();

const config = require('./config');

const routes = require('./routes/employees.routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(`/`, routes);

app.listen(config.PORT, () => {
  console.log(`Microservicio v${config.VERSION} escuchando en el puerto ${config.PORT}`);
});
