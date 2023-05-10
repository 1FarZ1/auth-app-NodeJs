const express = require('express');
const { getAllTasks, getTask, updateTasks, deleteTask, createTask } = require('../controllers/tasks.js');
const Tasksrouter = express.Router();

Tasksrouter.route('/').get(getAllTasks).post(createTask)
Tasksrouter.route('/:id').get(getTask).patch(updateTasks).delete(deleteTask)


module.exports = Tasksrouter;
