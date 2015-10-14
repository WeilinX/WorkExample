var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./conf');
var mongoose = require('mongoose');
var app = express();
/*app.get('/',function(req,res){
	res.send("hello World")
});*/
mongoose.connect(config.database,function(err){
	if(err){
		console.log(err);
	}else{
		console.log("connected to the database");
	}
})
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname+"/sampleWork"));
var api = require('./app/routes/api')(app,express);
app.use('/api',api);

app.listen(config.port);
console.log("server runing port 3200");