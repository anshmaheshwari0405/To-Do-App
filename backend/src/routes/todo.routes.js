const express = require('express');

const router = express.Router();
const { getTodos, createTodo, updateTodos} = require('../controllers/todo.controller');

router.get('/', getTodos);
router.post('/create', createTodo);
router.put('/update/:id', updateTodos);

module.exports = router;