var express = require('express');
var router = express.Router();
var zqxdata = require('../data/user');

/* GET home page. */
router.get('/', function(req, res, next) {
//res.render('register');
});

router.post('/',function(req,res){
	console.log(req.body);
	
	var userobj = {
		username:req.body.username,
		email:req.body.email,
		password:req.body.password
	};
	zqxdata.find({
		email:req.body.email,
	},(err,data)=>{
		if(!err){
			if(data.length == 0){
			zqxdata.create(userobj,(err,data)=>{
				if(!err){
//					res.redirect("/login"); //跳转到login页面，也叫重定向
					res.send("1"); //返回1的时候就是注册成功
				}
				else{
					res.send("0");//注册失败
				}
			})
		}else
			{
				res.send("-1"); //有同名
			}
		}
	});
	

/*	var userobj = {
		username:req.body.username,
		email:req.body.email,
		password:req.body.password
	};*/

	/*zqxdata.create(userobj,(err,data)=>{
		if(!err){
//			res.redirect("/login"); //跳转到login页面，也叫重定向
			res.send("1"); //返回1的时候就是注册成功
		}
		else{
			res.send("0");//注册失败
		}
	})*/
});

module.exports = router;


