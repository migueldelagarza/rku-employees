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
 * @swagger
 * /employees:
 *  post:
 *    summary: Agregar nuevo empleado
 *    consumes: [ "application/json" ]
 *    requestBody:
 *      content:
 *        "application/json":
 *          schema:
 *            properties:
 *              name:
 *                type: string
 *              account:
 *                type: string
 *              role:
 *                type: string
 *    responses:
 *     201:
 *       description: Empleado agregado
 *     400:
 *       description: El número de empleado ya existe.
 */
router.post('/employees', employees.addEmployee);

module.exports = router;