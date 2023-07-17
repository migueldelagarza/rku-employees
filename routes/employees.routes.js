/**
 * Rutas para gestión de usuarios
 */
const router = require('express').Router();
const employees = require('../controllers/employees.controller');

router.get('/employees', employees.getEmployees);

module.exports = router;