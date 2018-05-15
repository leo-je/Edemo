var express = require("express");
var app = express();
var http = require('http');
var controller = require('../core/controller');
var debug = require('debug')('myapp:server');

var eureka = require("./Eureka");

var port = process.env.PORT || 3000;
app.set("port",port);

app.set('view engine', 'jade');
//publie source
app.use(express.static('public'));

app.use(express.static(__dirname+'/public'));


//load controller
controller(app);

//404
app.use(function(req,res){
	res.type("text/plain");
	res.status(404);
	res.send('404 - not Found');
});

//500
app.use(function(err,req,res){
	console.error(err.stack);
	res.type("text/plain");
	res.status(500);
	res.send('500 - Server Error');

});

// app.listen(app.get('port'),function(){
// 	console.log(
// 		"express started on http://localhost:"+app.get("port")+
// 		" press Ctr-C to terminate. "
// 		);
// });

var server = http.createServer(app);
server.listen(port,function(){
		console.log(
			"server started on http://localhost:"+app.get("port")+
			" press Ctr-C to terminate. "
			);
});
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
