const { to, ReE, ReS } = require('../services/util.service');

const Dashboard = function(req, res){
	console.log("ENTRA DASH", "SI");
	let user = req.user.id;
	return res.json({success:true, message:'it worked', data:'user name is :'});
}
module.exports.Dashboard = Dashboard