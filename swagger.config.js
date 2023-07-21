const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Microservicio de Usuarios',
      version: '1.0.0',
      description: 'API para gestionar usuarios'
    },
  },
  apis: ['./routes/employees.routes.js'],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
