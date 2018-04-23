var express = require('express');
var router = express.Router();
var zqxdata = require('../data/user');

router.get('/', function(req, res, next) {
//res.render('login');
// res.send(req.query);
/* zqxdata.find({
		email:req.query.email,
		password:req.query.password
	},(err,data)=>{
		if(!err){
			if(data.length == 0){
//				res.render("login",{showerr:true});
				res.send("登录失败0");
			}else
			{
				// console.log(data);
//				res.redirect("/");
					res.send("登录成功1")
			}
		}
	});*/
});

router.post('/',(req,res) => {
	 console.log(req.body);
	 zqxdata.find({
		email:req.body.email,
		password:req.body.password
	},(err,data)=>{
		if(!err){
			if(data.length == 0){
//				res.render("login",{showerr:true});
				res.send("0");
			}else
			{
				// console.log(data);
				//res.redirect("/");
//				console.log(data);
				res.send("1");
//				res.send(data);
			}
		}
	});
});

module.exports = router;

