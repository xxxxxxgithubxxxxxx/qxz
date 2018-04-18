<template>

	<div id="box">
		<ul id="navall">
			
			<router-link to='news/all' tag='li' activeClass='active'><b>全部</b></router-link>
			<router-link to='news/zs' tag='li' activeClass='active'><b>知识</b></router-link>
			<router-link to='news/cp' tag='li' activeClass='active'><b>产品</b></router-link>
			<router-link to='news/xw' tag='li' activeClass='active'><b>新闻</b></router-link>
			<router-link to='news/rw' tag='li' activeClass='active'><b>人物</b></router-link>
			<router-link to='news/ss' tag='li' activeClass='active'><b>赛事</b></router-link>
			
		</ul>
		<router-view></router-view>
		<div>
			<img src="../assets/logo.png"/>
		</div>
	</div>
</template>

<script>


	export default{
		data(){
			return {
			}
		},
	}
</script>

<style lang="scss" scoped>
	.box{
		font-size: 0.12rem;
	}
	ul{
		list-style: none;
		display: flex;
		box-shadow: 0px 4px 4px #dddddd;
		li{
			cursor: pointer;
			float: left;
			flex: 1;
			height: 38px;
			text-align: center;
			line-height: 38px;
			font-size: 16px;
		}
	}
	.active{
		border-bottom: 4px solid #189adb;
	}
</style>

