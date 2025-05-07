const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json(await Todo.find());
});

router.post('/', async (req, res) => {
  const todo = new Todo(req.body);
  res.json(await todo.save());
});

router.get('/:id', async (req, res) => {
  res.json(await Todo.findById(req.params.id));
});

router.put('/:id', async (req, res) => {
  res.json(await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/:id', async (req, res) => {
  res.json(await Todo.findByIdAndDelete(req.params.id));
});

module.exports = router;
