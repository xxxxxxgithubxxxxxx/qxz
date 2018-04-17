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
			width:500px;
			height:100%;
			position: fixed;
			top: 50px;
			left: 0px;
			background:#282828;
			color: #000;
			ul{
				li{
					list-style: none;
					height:50px;
					line-height: 50px;
					color:#9a9a9a;
					border-top: 1px dotted #333;
					padding-left: 10px;
				}
			}
		}
		i{
			margin-right:5px;
		}
		.active{
			background:red;
		}
	</style>