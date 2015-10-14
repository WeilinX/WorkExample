var User = require('../modules/tableData');
var config = require('../../conf');
var secreKey = config.secretKey;
module.exports = function(app,express){
	var api = express.Router();
	api.post('/user',function(req,res){
		var user = new User({
			id:req.body.id,
			name:req.body.username,
			surname:req.body.surname
		})
		user.save(function(err){
			if(err){
				res.send(err);
				return;
			}
			res.json({msg:"user created"})
			
		});
	});
	return api;
}