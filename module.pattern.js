
// var Module = {

// 	var privateVar  = 'I am private...';

// 	method: function(){ 

// 	},
// 	nextMethod: function() {

// 	}

// }

// //module pattern is singlton

var repo = function () {

	return{
		get:get,
		save:save
	}

	var db = {};
	
	function get(id) {
		console.log('Getting task ' + id);
		return {
			name:'new task from db'
		}
	};

	function save(task) {
		console.log('Saving ' + task.name + ' to the db');
	}	

	
}


module.exports = repo();






