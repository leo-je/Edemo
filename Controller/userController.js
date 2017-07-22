var userService = require('../Service/UserService');
function userController(){
	var Cname = '/user';
	var p = [];

	p[p.length] = {
		m:'get',
		path:'/user',
		func:function(req,res){
			res.type('text/plain');
			//userService.getUser(req,res);
			userService.test(res);
		}
	};
	
	
	p.push({
			m:'get',
			path:'/user2',
			func:function(req,res){
				res.type('text/plain');
				userService.test(res);
			}
		});

	return {Cname:Cname,p:p};
}
module.exports = userController;