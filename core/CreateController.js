function CreateController(Cname,farr,app){
	//Cname = /xxx
	for(var i = 0;i<farr.length;i++){
		if(!farr[i].m) farr[i].m = 'get';
		if(farr[i].m == 'post' || farr[i].m == 'POST'){
			app.post(Cname+farr[i].path,farr[i].func);
		}
		if(farr[i].m == 'get' || farr[i].m == 'GET' ){
			app.get(Cname+farr[i].path,farr[i].func);
		}
	}

}
module.exports = CreateController;