/*jshint esversion: 6 */
console.log('inside of routes.js');

var Tasks = require('../controllers/tasks');
// var Messages = require('../controllers/messages');
// var Comments = require('../controllers/comments');

module.exports = function (app){

app.get('/tasks', Tasks.getAll);

app.get('/tasks/:id', Tasks.getOne);

app.post('/tasks', Tasks.create);

app.put('tasks/:id', Tasks.update);

app.delete('/tasks/:id', Tasks.remove);



// app.get("/", Messages.index);
//
// app.post("/message", Messages.create);
//
// app.post("/comment/:_id", Comments.create_comment);

};
