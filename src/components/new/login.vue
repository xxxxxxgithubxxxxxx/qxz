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
					<input type="text" name="username"  placeholder="手机号码/邮箱" v-model="username"/>
				</div>
				
				<div id="password">
				
				<input type="password" name="password"  placeholder="请输入密码" v-model="password"/>
				</div>
				<p v-show="showerr" id="err">{{title}}</p>
				<div id="btn">
					<input name="btn" id="btn" value="登录" @click="login()"/>
				</div>
			</form>
			<p class="register">
				<span id="register">
					<a href="/user/register">注册新帐号>></a>
				</span>
				<span id="pass">
					找回密码
				</span>
			</p>
			<p id="foot">
				社交帐号登录
			</p>
		</div>
	</div>
</template>

<script>
	import navbar from './navbar'
	import {setCookie,getCookie} from '../../assets/js/cookie.js'
	import axios from 'axios';
	import observer from '../../observer'
	
	export default{
		data(){
			return {
				username:'',
				password:'',
				showerr:false,
				title:'用户名或者密码错误!!!',
			}
		},
		mounted(){
			 /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
		    if(getCookie('username')){
		        this.$router.push('/home')
		    }
		    observer.publish(this.username)
		},
		 methods:{
		    login(){
		        if(this.username == "" || this.password == ""){
		            alert("请输入用户名或密码")
		        }else{
		            let data = {'email':this.username,'password':this.password}
//		            console.log(data);
		            /*接口请求*/
		            axios.post('/login11',data).then((res)=>{
		                console.log(res.data)
		             /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
		              if(res.data == 1){
		                   this.$router.push('/home');
		                   
		              }else if(res.data == 0){
		                  alert("输入有误");
		                  this.username = '';
			              this.password = '';
//		                  this.$router.push('/login');
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
			margin-top: 0.2rem;
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
		margin: 0.2rem 0rem;
		color: dodgerblue;
		#register{
			
			a{
				text-decoration: none;
				color: dodgerblue;
			}
		}
		#pass{
			float: right;
		}
	}
	#foot{
		color: gray;
	}
	#err{
		color: red;
		margin-top: -0.1rem;
	}
</style>