var query = require('../core/DB.js');
var Q = require('q');
var dao = {};

dao.getUser2 = function(argument) {
	var deferred = Q.defer();
	query('select * from user',function(e,v,f){
			console.log('v:'+JSON.stringify(v));
			deferred.resolve ({
				e:e,
				v:v,
				f:f
			});
		});
	return deferred.promise;
} 

dao.getUser = async function(argument) {
	var data = await query('select * from user');
	return data;
} 

dao.exeQuery = async function (){
	var data = undefined;
	data= await Q.nfcall(query,'select * from user').then(function(v){
		console.log('v:'+JSON.stringify(v[0]));
		return v[0];
	});
	return data;
}

module.exports = dao;