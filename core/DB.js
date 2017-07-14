var mysql = require("mysql");
var Config = require('../Config/DBconfig');

var config = Config;
var pool = mysql.createPool(config);

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

module.exports=query;  