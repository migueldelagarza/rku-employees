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

exports.addEmployee = (employee) => {
  return dataAccess.addEmployee(employee)
    .catch(error => { throw error });
}