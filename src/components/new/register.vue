<template>
	<div>
		<navbar></navbar>
		<div id="title">
			<p id="xingzhe">行者</p>
			<p id="a">虽千万里，吾往矣</p>
		</div>
		<div id="">
			
		</div>
		<div id="from">
			<form>
				<div id="username">
					<input type="text" name="username"  placeholder="手机号" v-model="newusername"/>
				</div>
				
				<div id="e-mail">
					<input type="text" name="e-mail"  placeholder="请输入邮箱" v-model="email" />
				</div>
				<div id="password">
				<input type="password" name="password"  placeholder="请输入密码" 
					v-model="newpassword"/>
				</div>
				<div id="btn">
					<input  name="btn" id="btn" value="注册" @click="register"/>
				</div>
			</form>
			<p class="register">
				<span id="register">
					已有帐号，
				</span>
				<span id="login">
					
					<a href="/user/login">直接登录>></a>
				</span>
				<span id="pass">
					邮箱注册
				</span>
			</p>
		</div>
	</div>
</template>

<script>
	import navbar from './navbar'
	import {setCookie,getCookie} from '../../assets/js/cookie.js'
	import axios from 'axios';
	
	export default{
		data(){
			return {
				newusername:'',
				newpassword:'',
				email:''
			}
		},
		methods:{
			register(){
			    if(this.newUsername == "" || this.newPassword == ""){
			        alert("请输入用户名或密码")
			    }else{
			        let data = {'username':this.newusername,'email':this.email,'password':this.newpassword,}
			        console.log(data);
			         axios.post('/register11',data).then((res)=>{
			            console.log(res.data);
			            if(res.data == "1"){
//			                this.tishi = "注册成功"
							console.log("注册成功");
			                this.showTishi = true
			                this.username = ''
			                this.password = ''
			                 /*注册成功之后再跳回登录页*/
			               setTimeout(function(){
								this.$router.push('/user/login')
			                }.bind(this),1000)
			            }
			        })
			    }
			}
		},
		components:{
			navbar,
		}
	}
</script>

<style lang="scss" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	#title{
		width: 2rem;
		height: 0.5rem;
		/*border: solid 0.01rem red;*/
		line-height: 0.5rem;
		text-align: center;
		margin: 0 auto;
		#xingzhe{
			font-size: 0.52rem;
			color:dodgerblue ;
			font-style: oblique ;
			margin-top: 0.3rem;
		}
		#a{
			margin-top: -0.1rem;
			color:dodgerblue ;
		}
	}
	#from{
		width: 2.5rem;
		height: 3rem;
		
		/*text-align: center;*/
		margin: 0 auto;
		margin-top: 0.4rem;
		input{
			width: 2.5rem;
			height: 0.4rem;
			text-indent: 0.1rem;
			font-size: 0.14rem;
			margin-bottom: 0.2rem;
		}
		#btn{
			width: 2.53rem;
			text-indent: 0rem;
			background: dodgerblue;
			color: white;
			border: none;
			margin-bottom:0rem;
		}
	}
	.register{
		margin: 0.3rem 0rem;
		color: dodgerblue;
		#pass{
			float: right;
		}
		#login{
			a{
				text-decoration: none;
				color:dodgerblue ;
			}
		}
		#register{
			color: black;
		}
	}
</style>