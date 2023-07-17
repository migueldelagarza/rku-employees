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

exports.addEmployee = async (req, res) => {
  console.log('Agregando nuevo usuario...');
  try {
    const employee = req.body;
    _employes.addEmployee(employee)
      .then(() => {
        res.status(201).send('Empleado agregado')
      })
      .catch((error) => {
      console.error('Error al escribir en base de datos', error);
      res.status(400).send(error.sqlMessage);
    });
  } catch (error) {
    console.error('Error al guardar empleado');
    res.status(500).send('Error en servidor/solicitud');
  }
}