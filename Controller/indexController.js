
/*
http://xxxxx/Cname/path
*/

function indexController(){  
	var Cname = '/'
	var p = [];

	p.push({
		path:'',
		func:function(req,res){
			console.log(req);
			console.log(res);
			//res.type('text/plain');
			//res.send('index');
			//res.render('index',{title:'hey',message:'hello there'});
			res.sendfile("./public/index.html");
		}
	});
	
	p.push({
		path:'login',
		m:'post',
		func:function(req,res){
			var _u =   {
				    id: 1,
				    username: 'admin',
				    password: '123456',
				    email: 'jerry9022@qq.com',
				    name: '风车车'
				  }
			res.send({
				msg:'',
				code:200,
				user:_u
			});
		}
	});

	return {Cname:Cname,p:p};
}

module.exports = indexController;