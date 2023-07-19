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
    res.status(200).send(result);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error en la solicitud');
  }
};

/**
 * Obtiene un empleado por su número
 * @param req petición
 * @param res respuesta
 */
exports.getEmployeByAccount = async (req, res) => {
  try {
    const { accountNumber } = req.params;
    console.log(`Consultando usuario número: ${accountNumber}`);
    const result = await _employes.getEmployeeByAccount(accountNumber)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(error => {
        res.status(400).send(error.sqlMessage)
      })
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).send('Error en la solicitud');
  }
}

/**
 * Guardo nuevo empleado
 * @param req petición
 * @param res respuesta
 */
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

/**
 * Registra entregas mensuales
 * @param {object} employee 
 * @param {string} month 
 * @param {number} deliveries 
 * @returns {promise}
 */
exports.addDelivery = async (req, res) => {
  console.log('Registrando entregas...');
  try {
    const { employee, month, deliveries } = req.body;
    _employes.addDelivery(employee, month, deliveries)
      .then(() => { res.status(200).send('Entregas registradas') })
      .catch((error) => {
        console.error('Error al escribir en base de datos:', error);
        res.status(400).send(error.sqlMessage);
      });
  } catch (error) {
    console.error('Error al guardar entregas');
    res.status(500).send('Error en servidor/solicitud');
  }
}