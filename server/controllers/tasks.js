/*jshint esversion: 6 */
var mongoose = require('mongoose');
var Task = mongoose.model("Task");

class Tasks{
  getAll(req, res){
    Task.find({}, function(err, tasks){
      res.json({tasks: tasks});
    });
  }

  getOne(req, res){
    var task_id = req.params.id;
    Task.find({_id : task_id}, function(err, task){
      res.json({task:task});
    });
  }

  create(req, res){
    let task = new Task({task: req.body});
    task.save(function(err){
      res.json({ task: task});
    });
  }

  update(req, res){
    Task.findByIdAndUpdate(req.params.id, req.body,{runValidators: true}, (err,task) =>{

    });
    res.json("updated");
  }

  remove(req, res){
    var id = req.pdarams.id;
    Task.remove({_id: id}, function(err, task){
      res.json('Successfully deleted');
    });
  }

}


module.exports = new Tasks();
