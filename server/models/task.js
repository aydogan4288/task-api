/*jshint esversion: 6 */
console.log('inside of task.js');

var mongoose = require("mongoose");


var TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title must have a task"]},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false}
}, {timestamp:true});

mongoose.model('Task', TaskSchema);
