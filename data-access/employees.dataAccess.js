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
    .then(result => result[0])
    .catch(error => error)
};

exports.addEmployee = (employee) => {
  const { name, account, role } = employee;
  return callProcedure('CALL EMPOLYCTE(?, ?, ?)', [name, account, role])
    .then(result => {
      console.log('Usuario agregado');
      return result;
    })
    .catch(error => { throw error })
}
