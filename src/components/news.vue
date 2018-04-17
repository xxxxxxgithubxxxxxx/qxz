<template>

	<div id="box">
		<ul>
			<router-link to='?type=0&page=0' activeClass='active' tag='li'><b>全部</b></router-link>
			<router-link to='?type=1&page=0' activeClass='active' tag='li'><b>知识</b></router-link>
			<router-link to='?type=2&page=0' activeClass='active' tag='li'><b>产品</b></router-link>
			<router-link to='?type=3&page=0' activeClass='active' tag='li'><b>新闻</b></router-link>
			<router-link to='?type=4&page=0' activeClass='active' tag='li'><b>人物</b></router-link>
			<router-link to='?type=5&page=0' activeClass='active' tag='li'><b>赛事</b></router-link> 
			
		</ul>
		<!--<component :is=''></component>-->
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
		}
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

