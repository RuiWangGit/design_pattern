
var repo = {

	var db = {};

	get: function (id) {
		console.log('Getting task ' + id);
		return {
			name: 'new task from db'
		}
	}, 
	save: function (task) {
		console.log('Saving ' + task.name + ' to the db');
	}

	console.log('newing a new task repo')
}

repo.execute = function(name) {
	var args = Array.prototyp.slice.call(arguments, 1);
	if ( repo[name] ){
		return repo[name].apply(repo.args)
	}
	return false;
}

module.export = repo;


var tmp = '';
var tmp1 = null;
var tmp2;
var tmp3;
var arr = [];
console.log(typeof tmp);
console.log(typeof tmp1);
console.log(typeof tmp2);
if ( null == undefined) {
	console.log(true);
}
else {
	console.log(false);
}

if ( tmp3 ) {
	console.log(true);
}
else {
	console.log(false);
}

console.log(typeof arr[repo])

if ( arr[repo]) {
	console.log(true);
}
else {
	console.log(false);
}
