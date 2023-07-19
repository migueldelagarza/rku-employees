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
 * @swagger
 * /employees/{accountNumber}:
 *  get:
 *    summary: Obtener un empleado por su número
 *    parameters:
 *      - name: accountNumber
 *        in: path
 *        required: true
 *        description: número de empleado
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: OK
 *      404:
 *        description: empleado no encontrado
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

/**
 * Ruta para agregar un empleado nuevo
 * @swagger
 * /employees/deliveries:
 *  post:
 *    summary: Agregar entregas mensuales
 *    consumes: [ "application/json" ]
 *    requestBody:
 *      content:
 *        "application/json":
 *          schema:
 *            properties:
 *              month:
 *                type: string
 *              deliveries:
 *                type: number
 *              employee:
 *                type: object
 *    responses:
 *     201:
 *       description: Se registraron entregas
 *     400:
 *       description: El número de empleado no existe.
 */
router.post('/employees/deliveries', employees.addDelivery);

module.exports = router;