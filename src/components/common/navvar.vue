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
			font-size: 0.12rem;
			height: 0.25rem;
			line-height: 0.12rem;
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