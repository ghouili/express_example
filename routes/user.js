const express = require('express');
const userController = require('../controllers/user');
const route = express.Router();

route.get('/', userController.GetAll );

route.get('/:id', userController.FindById );

route.patch('/:id', userController.UpdateUser);

route.delete('/:id', userController.Deleteuser);

route.post('/add', userController.Ajout);

route.post('/register', userController.register);

route.post('/login', userController.login);

module.exports = route;