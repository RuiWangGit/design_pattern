
var Task = require('./task');
// var taskRepo = require('./taskRepo');
// var userRepo = require('./userRepo');
// var projectRepo = require('./projectRepo');

var repoFactory = require('./repoFactory');


console.log('$$')

var task1 = new Task(repoFactory.getRepo('task').get(1))
var task2 = new Task(repoFactory.getRepo('task').get(2))
var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);


task1.user = user;
task1.project = project;

//console.log(task1);
task1.save();