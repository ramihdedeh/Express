const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.get('/', userController.logUsernames);
router.get('/new', userController.showForm);
router.post('/new', userController.saveUsername);
router.get('/delete', userController.deleteUsernames);

module.exports = router;
