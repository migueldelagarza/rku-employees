/**
 * Servicio para gestión de usuarios
 */

const dataAccess = require('../data-access/employees.dataAccess');

/**
 * Obtiene todos los empleados
 * @returns Promise
 */
exports.getEmployees = () => {
  return dataAccess.getEmployees();
}

/**
 * Obtiene un empleado por su número
 * @param {string} accountNumber 
 * @returns 
 */
exports.getEmployeeByAccount = (accountNumber) => {
  return dataAccess.getEmployeeByAccount(accountNumber)
    .catch(error => { throw error });
}

/**
 * Guarda nuevo empleado
 * @param {name: string, account: string, role: string} employee 
 * @returns 
 */
exports.addEmployee = (employee) => {
  return dataAccess.addEmployee(employee)
    .catch(error => { throw error });
}