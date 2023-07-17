/**
 * Rutas para gestión de usuarios
 */
const router = require('express').Router();
const employees = require('../controllers/employees.controller');

router.get('/employees', employees.getEmployees);

/**
 * Ruta para agregar un empleado nuevo
 * @body {name: string, account: string, role: string}
 */
router.post('/employees', employees.addEmployee);

module.exports = router;