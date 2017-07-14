var query = require('../core/DB.js');
var userDao = require('../Dao/UserDao');

var UserService = {};
UserService.getUser = function (req,res,pram) {
	query(userDao.getUser,function(e,v,f){
		res.send(JSON.stringify(v));
	});
}

module.exports = UserService;