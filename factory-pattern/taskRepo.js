var repo = function () {

	

	var db = {};
	
	function get(id) {
		console.log('Getting task ' + id);
		return {
			name:'new task from db'
		}
	};

	

	function save(task) {
		console.log('Saving ' + task.name + ' to the db');
	};	

	console.log('newinging  task')

	return{
		get:get,
		save:save
	}

	
}


module.exports = repo;