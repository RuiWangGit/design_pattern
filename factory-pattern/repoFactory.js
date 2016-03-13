//factory for modules

var repoFactory = function () {


	this.getRepo = function(repoType) {
		if ( repoType === 'task') {
			var taskRepo = require('./taskRepo')();
			return taskRepo;

			// if ( this.taskRepo){
			// 	return this.taskRepo;
			// }
			// else {
			// 	this.taskRepo = require('./taskRepo')();
			// 	//config --
			// 	return this.taskRepo;
			// }
		}

		if ( repoType === 'user') {
			var userRepo = require('./userRepo')
			return userRepo;
		}

		if ( repoType === 'project') {
			var projectRepo = require('./projectRepo')
			return projectRepo;
		}
	}
}


module.exports = new repoFactory;






