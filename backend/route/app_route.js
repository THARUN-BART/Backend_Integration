const express = require('express');
const Storage = require('node-persist');
Storage.init();
const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Storage.values();
    res.send(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving tasks');
  }
});

// Get a task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Storage.getItem(req.params.id);
    if (!task) return res.status(404).send('Task not found');
    res.send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving task');
  }
});

// Create one or many tasks
router.post('/', async (req, res) => {
  const tasks = Array.isArray(req.body) ? req.body : [req.body];

  try {
    for (const task of tasks) {
      const { id, title, completed = false } = task;
      if (!id || !title) {
        return res.status(400).send('Missing task information');
      }
      await Storage.setItem(id, {
        id,
        title,
        completed,
        createdAt: new Date().toISOString()
      });
    }
    res.status(201).send('Task(s) created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating task(s)');
  }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
  const task = await Storage.getItem(req.params.id);
  if (!task) return res.status(404).send('Task not found');

  await Storage.removeItem(req.params.id);
  res.send(`Task with ID ${req.params.id} deleted`);
});

// Update a task by ID
router.put('/:id', async (req, res) => {
  const task = await Storage.getItem(req.params.id);
  if (!task) return res.status(404).send('Task not found');

  const { title, completed } = req.body;
  const updatedTask = {
    id: req.params.id,
    title: title ?? task.title,
    completed: completed ?? task.completed,
    updatedAt: new Date().toISOString()
  };

  await Storage.setItem(req.params.id, updatedTask);
  res.send(`Task with ID ${req.params.id} updated`);
});

module.exports = router;