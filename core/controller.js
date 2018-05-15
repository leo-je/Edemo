var fs = require('fs');
var CreateController = require('./CreateController');

function controller(app){
	var Controller = [];
	var _app = app;
	//var path = '.'+'\\'+'Controller';
	var path = '.'+'/'+'Controller';
	console.log('load the Controller path:'+path);
	var files = fs.readdirSync(path);
	files.forEach(function(e,index){
		var _f = files[index].split('.')[0];
		console.log('load:'+_f);
		Controller[index] = _f;
	});

	var _c = [];
	for(var i=0;i<Controller.length;i++){
		_c[i] = require('../Controller/'+Controller[i]);
		CreateController(_c[i]().Cname,_c[i]().p,_app);
	}
}

module.exports = controller;
