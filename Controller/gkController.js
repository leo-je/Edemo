
/*
http://xxxxx/Cname/path
*/

function indexController(){  
	var Cname = '/gk'
	var p = [];

	p.push({
		path:'/zy',
		func:function(req,res){
			//res.type('text/plain');
			//res.send('index');
			//res.render('index',{title:'hey',message:'hello there'});
			res.sendfile("./public/views/gkzy.html");
		}
	});

	return {Cname:Cname,p:p};
}

module.exports = indexController;