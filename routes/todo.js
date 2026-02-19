const express = require('express');
const { create, get, removeTodo } = require('../controller');
const router = express.Router();

router.post('/todo/create', create);

router.get('/todos', get);

router.delete('/todo/:id', removeTodo);

module.exports = router;