<template>
	<div id="box">
		<ul id="navall">
			<li @click="zujian='all'" class="active"><b>全部</b></li>
			<li @click="zujian='zs'"><b>知识</b></li>
			<li @click="zujian='cp'"><b>产品</b></li>
			<li @click="zujian='xw'"><b>新闻</b></li>
			<li @click="zujian='rw'"><b>人物</b></li>
			<li @click="zujian='ss'"><b>赛事</b></li>
		</ul>
		<div id="contentlist">
			<component :is='zujian'></component>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import all from '../components/new/all';
import zs from '../components/new/zs';
import cp from '../components/new/cp';
import xw from '../components/new/xw';
import rw from '../components/new/rw';
import ss from '../components/new/ss';

	export default{
		data(){
			return {
				isShow:true,
				zujian:all
			}
		},
		components:{
		all,
	    zs,
	    cp,
	    xw,
	    rw,
	    ss
	  }
	}
	$(function(){
	$("#navall li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
})
</script>

<style lang="scss" scoped>
	ul{
		
		list-style: none;
		display: flex;
		box-shadow: 0rem 0.04rem 0.04rem #dddddd;
		position: fixed;
		top: 0.25rem;
		left: 0rem;
		width: 100%;
		background: white;
		li{
			cursor: pointer;
			float: left;
			flex: 1;
			height: 0.36rem;
			text-align: center;
			line-height: 0.36rem;
			font-size: 0.14rem;
			a{
				text-decoration: none;
				color: black;
			}
		}
		
	}
	.active{
		border-bottom: 0.03rem solid #189ADB;
	}
	#contentlist{
		margin-top: 0.58rem;
	}
</style>

