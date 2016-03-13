var userRepo = function() {
	

	var db = {};
	
	function get(id) {
		console.log('Getting user ' + id);
		return {
			name:'new user from db'
		}
	};

	

	function save(user) {
		console.log('Saving ' + user.name + ' to the db');
	};	

	return{
		get:get,
		save:save
	}

}



module.exports = userRepo();