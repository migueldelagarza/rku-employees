/**
 * Controlador para gestión de usuarios
 */
const _employes = require('../services/employees.service');

/**
 * Obtiene todos los empleados
 * @param _ petición (no se usa)
 * @param res respuesta
 */
exports.getEmployees = async (_, res) => {
  console.log('Consultando todos los usuarios');
  try {
    const result = await _employes.getEmployees();
    res.send(result);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error en la solicitud');
  }
};