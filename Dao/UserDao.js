var dao = {};
dao.getUser = function(argument) {
	return 'select id,username from users';
} 

module.exports = dao;