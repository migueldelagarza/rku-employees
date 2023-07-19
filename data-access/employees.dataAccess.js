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

/**
 * Obtiene un empleado por su número
 * @param {string} accountNumber 
 * @returns Promise
 */
exports.getEmployeeByAccount = (accountNumber) => {
  return callProcedure('CALL EMPOLYACCCON(?)', accountNumber)
    .then(result => result[0][0])
    .catch(error => { throw error })
}

/**
 * Guarda nuevo empleado
 * @param {name: string, account: string, role: string} employee 
 * @returns Promise
 */
exports.addEmployee = (employee) => {
  const { name, account, role } = employee;
  return callProcedure('CALL EMPOLYCTE(?, ?, ?)', [name, account, role])
    .then(result => {
      console.log('Usuario agregado');
      return result;
    })
    .catch(error => { throw error })
}

/**
 * Registra entradas mensuales
 * @param {object} employee 
 * @param {string} month 
 * @param {number} deliveries 
 * @returns 
 */
exports.addDelivery = (employee, month, deliveries) => {
  const { name, account, role } = employee
  return callProcedure('CALL DVYOLYCTE(?, ?, ?, ?, ?)', [name, account, role, month, deliveries])
    .then(result => {
      console.log('Entregas registradas');
      return result;
    })
    .catch(error => { throw error });
}