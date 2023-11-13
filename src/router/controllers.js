const todoData = require("../data/todo");

const getAll = (req, res) => {
    res.json(todoData);
};

const getById = (req, res) => {
    const body = req.body;
    const newTodo = {
      id: todoData.length + 1,
      text: body.text,
      fecha: body.fecha,
      done: body.done,
    };
    todoData.push(newTodo);
    res.status(201).json(todoData);
};

const create = (req, res) => {
    const element = todoData.find((todo) => {
      return todo.id === parseInt(req.params.id);
    });
    if (!element) return res.status(404).send();
    res.json(element);
};

const update = (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todoData.findIndex((todo) => todo.id === todoId);
    if (todoIndex !== -1) {
      todoData[todoIndex] = { ...todoData[todoIndex], ...req.body };
      res.json(todoData);
    } else {
      res.status(404).send();
    }
};

const remove = (req, res) => {
    const todoIndex = todoData.findIndex((todo) => {
      return todo.id === parseInt(req.params.id)
    });
    if (todoIndex === -1) return res.status(404).send();
    todoData.splice(todoIndex, 1);
    return res.json(todoData);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};