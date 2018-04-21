	<template>
		<nav>
			<div class="left">
			    <slot name="iconfont"></slot>
			</div>
			<p v-show="true">欢迎---{{name}}</p>
			<div class="right" v-show="true">
				<router-link tag='span' to='/user/login'>登录</router-link>
				<router-link tag='span' to='/user/register'>注册</router-link>
				<!-- <i class="iconfont icon-account"></i> -->
			</div>
		</nav>
	</template>
	<script>
		import observer from '../../observer'
	export default{
		data(){
			return{
				name:'',
				isShow:true
			}
		},
		mounted(){
			observer.subscribe(function(message){
				this.isShow = !this.isShow
			})
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
			p{
				float:right;
				margin-left: 0.1rem;
				
			}
		}
	</style> 