
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
			res.sendfile("./public/views/index.html");
		}
	});

	return {Cname:Cname,p:p};
}

module.exports = indexController;