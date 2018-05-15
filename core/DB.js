var mysql = require("mysql");
var Config = require('../Config/DBconfig');
var Q = require('q');
var colors = require('colors');
var config = Config;
var pool = mysql.createPool(config);
console.log('DB.js');
var query = function(sql,callback){
	pool.getConnection(function(err,conn){
		console.log('exec:'+sql); 
        if(err){  
            callback(err,null,null);  
        }else{  
        	conn.query(sql,function(qerr,vals,fields){  
                //释放连接  
                conn.release();  
                //事件驱动回调
                callback(qerr,vals,fields);  
            });  
        }  
    });
};

var exeQuery = async function (sql){
	var data = undefined;
	data= await Q.nfcall(query,sql).then(function(v){
		console.log('v:'+JSON.stringify(v));
		return v[0];
	}).then(function(v){
		return v;
	}).catch(function(e) {
		console.log('Error:'.red+JSON.stringify(e));
		 console.log("exeQuery has a Error: ".red + e.message);
		 return null;
	});
	return data;
}
module.exports=exeQuery;
//module.exports=query; 