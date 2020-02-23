'use strict';

const { Router } = require('express');

const Todo = require('../models/todos');

const router = Router();

const mapDataToResponse = data => (data.map(
  ({ _id, label, isCompleted, isImportant }) => ({
    id: _id,
    label,
    isCompleted,
    isImportant
  })
));


// get all entries
router.get('/', async (req, res) => {
  try {
    let todos = await Todo.find();
    todos = mapDataToResponse(todos);
    res.json(todos);
  } catch (err) {
    console.log('Error: ', err);
    res.status(404).json({ message: 'Could not load data!' });
  }
});


// add entry
router.post('/add', async (req, res) => {
  const reqTodo = req.body;
  const todo = new Todo(reqTodo);
  try {
    await todo.save();
    let todos = await Todo.find();
    todos = mapDataToResponse(todos);
    res.status(201).json(todos);
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({ message: 'Failed to add entry!' });
  }
});

// remove entry by id
router.delete('/remove/:id', async (req, res) => {
  try {
    const removedTodo = await Todo.findOneAndRemove(req.params.id);
    if (!removedTodo) throw new Error('Entry doesn\'t exist!');
    let todos = await Todo.find();
    todos = mapDataToResponse(todos);
    res.json(todos);
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({ message: 'Failed to remove entry!' });
  }
});

// update entry by id

router.post('/edit', async (req, res) => {
  const { id, isCompleted } = req.body;
  try {
    await Todo.
      findByIdAndUpdate(id, { isCompleted: !isCompleted }, { new: true });

    let todos = await Todo.find();
    todos = mapDataToResponse(todos);
    res.status(201).json(todos);
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({ message: 'Failed to edit entry!' });
  }
});

module.exports = router;
