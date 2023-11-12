const todos = require("./data");

const getAll = (req, res) => {
    res.json(todos);
};

const getById = (req, res) => {
    const { text, fecha, done } = req.body;
    const newId = todos.length + 1;
    const newTodo = {
      id: newId,
      text: text,
      fecha: fecha,
      done: done,
    };
    todos.push(newTodo);
    res.status(201).json(todos);
};

const create = (req, res) => {
    const element = todos.find((todo) => {
      return todo.id === parseInt(req.params.id);
    });
    if (!element) return res.status(404).send();
    res.json(element);
};

const update = (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex !== -1) {
      todos[todoIndex] = { ...todos[todoIndex], ...req.body };
      res.json(todos);
    } else {
      res.status(404).send();
    }
};

const remove = (req, res) => {
    const todoIndex = todos.findIndex((todo) => {
      return todo.id === parseInt(req.params.id)
    });
    if (todoIndex === -1) return res.status(404).send();
    todos.splice(todoIndex, 1);
    return res.json(todos);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};