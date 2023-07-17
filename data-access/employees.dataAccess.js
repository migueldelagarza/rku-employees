/**
 * Data access para gestionar usuarios
 */
const mysql = require('mysql');
const { DB_CONFIG } = require('../config');
const connection = mysql.createConnection(DB_CONFIG);
const { promisify } = require('util');
const callProcedure = promisify(connection.query).bind(connection);

/**
 * Obtiene todos los empleados
 * @returns Promise
 */
exports.getEmployees = () => {
  return callProcedure('CALL EMPALLCON()')
    .then( result => result[0])
    .catch( error => error)
};
