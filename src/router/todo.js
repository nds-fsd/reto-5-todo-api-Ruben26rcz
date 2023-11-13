const express = require('express');
const todoRouter = express.Router();
const controller = require('./controllers')

todoRouter.get('/', controller.getAll);
todoRouter.get('/:id', controller.create);
todoRouter.post('/', controller.getById);
todoRouter.patch('/:id', controller.update);
todoRouter.delete('/:id', controller.remove);

module.exports = todoRouter;