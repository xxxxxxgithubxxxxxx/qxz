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
	
	#navall{
		list-style: none;
		display: flex;
		box-shadow: 0rem 0.04rem 0.04rem #dddddd;
		li{
			cursor: pointer;
			float: left;
			flex: 1;
			height: 0.38rem;
			text-align: center;
			line-height: 0.38rem;
			font-size: 0.16rem;
		}
	}
	.active{
		border-bottom: 0.08rem solid #189ADB;
	}
</style>

