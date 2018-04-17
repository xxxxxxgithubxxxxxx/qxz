	<template>
		<nav>
			<div class="left">
			    <slot name="iconfont"></slot>
			</div>

			<div class="right">
				<span>登录</span>
				<span>注册</span>
				<!-- <i class="iconfont icon-account"></i> -->
			</div>
		</nav>
	</template>
	<script>
	export default{
		data(){
			return{

			}
		},
		computed:{

		}
	}
	</script>
	<style lang="scss" scoped type="text/css" >
		nav{
			height: 50px;
			line-height: 50px;
			background: #282828;
			color: #fff;
			position: fixed;
			width: 100%;
			top: 0;
			left:0;
			div:nth-of-type(1){
				float: left;
			}
			div:nth-of-type(2){
				float:right;
			}
		}
	</style> 