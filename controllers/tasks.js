const Task = require('../models/task');


let getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        if(!tasks){
            return res.status(404).json({ success: false, msg: 'No tasks found' })
        }
        res.status(200).json({ success: true, tasks })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}

let getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;

        const task = await Task.findOne({ _id: taskID});
        if(!task){
            return res.status(404).json({ success: false, msg: `No task with id: ${taskID}` })
        }

        res.status(200).json({ success: true, task })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}


let createTask = async (req, res) => {
    try {
        if(!req.body.name || req.body.name.length < 3){
            return res.status(400).json({ success: false, msg: 'Task name must be at least 3 characters' })
        }
        const task = await Task.create(req.body);
        res.status(201).json({ success: true, task })
    } catch (error) {
        res.status(500).json({ success: false, msg: '[Error] :' + error.message })
    }

}

let deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
       let task =  await Task.findOneAndDelete({ _id: taskID });
        if(!task){
            return res.status(404).json({ success: false, msg: `No task with id: ${taskID}` })
        }
        res.status(200).json({ success: true, msg: 'Task deleted' })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }
}

let updateTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
          })
        if(!task){
            return res.status(404).json({ success: false, msg: `No task with id: ${taskID}` })
        }
        res.status(200).json({ success: true, task })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}


// you can add a put method to update all the fields of a document , but for now i wont use it , patch is for updating some fields of a document , put is for updating all the fields of a document

module.exports =  { getAllTasks, createTask, deleteTask, updateTasks, getTask };