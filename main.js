 
var Repo = require('./module.pattern')

var Task = function(data) {
 	this.name = data.name;
 	this.priority = data.priority;
 	this.project = data.project;
 	this.user = data.user;
 	this.completed = data.completed;

 }

 Task.prototype.complete = function () {
 	console.log('completing task: ' + this.name);
 	this.completed = true;
 }

 Task.prototype.save = function () {
 	console.log('saving Task: ' + this.name);
 	Repo.save(this);
 }

var task1 = new Task(Repo.get(1));
// var task2 = new Task('create a demo for modules');
// var task3 = new Task('create a demo for singletons');
// var task4 = new Task('create a demo for prototypes');
var task2 = new Task({name:'create a demo for modules'});
var task3 = new Task({name:'create a demo for singletons'});
var task4 = new Task({name:'create a demo for prototypes'});


task1.complete();
task2.save();
task3.save();
task4.save();







 //module.exports = Task;

