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
					<input type="text" name="username"  placeholder="手机号" />
				</div>
				
				<div id="e-mail">
					<input type="text" name="e-mail"  placeholder="请输入邮箱" />
				</div>
				<div id="password">
				<input type="password" name="password"  placeholder="请输入密码" />
				</div>
				<div id="btn">
					<input type="submit" name="btn" id="btn" value="注册" />
				</div>
			</form>
			<p class="register">
				<span id="register">
					已有帐号，
				</span>
				<span >
					
					直接登录>>
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
	
	export default{
		data(){
			return {
				
			}
		},
		components:{
			navbar,
		}
	}
//	import footbar from './footbar'
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
		#register{
			color: black;
		}
	}
</style>