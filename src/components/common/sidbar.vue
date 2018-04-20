	<template>
	<div>
		<ul @click="helloxianshi()">
			<router-link to="/home" tag="li" activeClass="active">行者</router-link>
			<router-link to="/lushu" tag="li" activeClass="active"><i class="iconfont icon-office"></i>路书</router-link>
			<router-link to="/xzb" tag="li" activeClass="active"><i class="iconfont icon-store"></i>行者帮</router-link>
			<router-link to="/competitions" tag="li" activeClass="active"><i class="iconfont icon-creditlevelfilling"></i>赛事</router-link>
			<router-link to="/news" tag="li" activeClass="active"><i class="iconfont icon-text"></i>行者头条</router-link>
			<router-link to="/help" tag="li" activeClass="active"><i class="iconfont icon-warning"></i>帮助中心</router-link>
			<router-link to="/contact" tag="li" activeClass="active"><i class="iconfont icon-phone"></i>联系我们</router-link>
			<router-link to="/feng" tag="li" activeClass="active"><i class="iconfont icon-mobilephone"></i>智能设备</router-link>
		</ul>
	</div>
	</template>
	<script>
	export default{
		data(){
			return{
			}
		},
		computed:{

		},
		methods:{
			helloxianshi(){
				this.$emit("event");
			}
		}
	}
	</script>
	<style lang="scss" scoped type="text/css">
		div{
			font-size: 0.12rem;
			width:2.5rem;
			height:100%;
			position: fixed;
			top: 0.25rem;
			left: 0;
			background:#282828;
			color: #000;
			z-index: 2;
			ul{
				li{
					list-style: none;
					height:0.25rem;
					line-height: 0.25rem;
					color:#9a9a9a;
					border-top: 0rem dotted #333;
					padding-left: 0.25rem;
				}
			}
		}
		i{
			margin-right:0.02rem;
		}
		.active{
			background:red;
		}
	</style>