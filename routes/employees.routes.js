/**
 * Rutas para gestión de usuarios
 */
const router = require('express').Router();
const employees = require('../controllers/employees.controller');

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Obtener todos los empleados
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/employees', employees.getEmployees);

/**
 * Ruta para buscar un empleado por su número
 */
router.get('/employees/:accountNumber', employees.getEmployeByAccount);

/**
 * Ruta para agregar un empleado nuevo
 * @body {name: string, account: string, role: string}
 */
router.post('/employees', employees.addEmployee);

module.exports = router;