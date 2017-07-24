var query = require('../core/DB.js');
var userDao = require('../Dao/UserDao');
var Q = require('q');
var colors = require('colors');
var UserService = {};
UserService.getUser = function (req,res,pram) {
	query(userDao.getUser,function(e,v,f){
		res.send(JSON.stringify(v));
	});
}

UserService.test = async function(res){
	var d = "";
/*	var s = await ss().then(function(f){
		console.log(JSON.stringify(f));
		d = f;
		return d;
	});*/
/*	var s = await userDao.getUser2().then(function(v){
		d = v;
		return v;
	});*/
	var s = await userDao.getUser();//await userDao.exeQuery();
	console.log('s:'.green+JSON.stringify(s).green);
	res.send({
		users:s
	});
}

 var ss = function (res){
	var deferred = Q.defer();
	query('select * from user',function(err,v,f){
		// res.send(JSON.stringify(v));
		console.log('ss');
        if(err) deferred.reject(err);
        else deferred.resolve(v);
	});
	return deferred.promise;
}

module.exports = UserService;