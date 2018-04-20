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
			line-height: 0.25rem;
			background: #282828;
			color: #fff;
			position: fixed;
			z-index: 2;
			width: 100%;
			top: 0;
			left:0;
			box-sizing: border-box;
			padding: 0 0.1rem;
			div:nth-of-type(1){
				float: left;
			}
			div:nth-of-type(2){
				float:right;
				span{
					margin-left: 0.1rem;
				}
			}
		}
	</style> 