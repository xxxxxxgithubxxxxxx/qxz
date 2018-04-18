<template>

	<div id="box">
		<ul id="navall">
			
			<!--<router-link to='news/all' tag='li' activeClass='active'><b>全部</b></router-link>
			<router-link to='news/zs' tag='li' activeClass='active'><b>知识</b></router-link>
			<router-link to='news/cp' tag='li' activeClass='active'><b>产品</b></router-link>
			<router-link to='news/xw' tag='li' activeClass='active'><b>新闻</b></router-link>
			<router-link to='news/rw' tag='li' activeClass='active'><b>人物</b></router-link>
			<router-link to='news/ss' tag='li' activeClass='active'><b>赛事</b></router-link>-->
			
			<!--<li @click="zujian='all'" class="active"><a href="/news/?type=0&page=0"><b>全部</b></a></li>
			<li @click="zujian='zs'"><a href="/news/?type=1&page=0"><b>知识</b></a></li>
			<li @click="zujian='cp'"><a href="/news/?type=2&page=0"><b>产品</b></a></li>-->
			<li @click="zujian='all'"><b>全部</b></li>
			<li @click="zujian='zs'"><b>知识</b></li>
			<li @click="zujian='cp'"><b>产品</b></li>
			<li @click="zujian='xw'"><b>新闻</b></li>
			<li @click="zujian='rw'"><b>人物</b></li>
			<li @click="zujian='ss'"><b>赛事</b></li>
			<!--<li @click="zujian='aiguo_all'" class="active" ><a href="/news/?type=0&page=0"><b>全部</b></a></li>
			<li @click="zujian='aiguo_yundong'" clsaa="active"><a href="/news/?type=1&page=0"><b>知识</b></a></li>
			<li @click="zujian='aiguo_all'" class="active" ><a href="/news/?type=0&page=0"><b>产品</b></a></li>
			<li @click="zujian='aiguo_yundong'"><a href="/news/?type=1&page=0"><b>知识</b></a></li>
			<li @click="zujian='aiguo_all'" class="active" v-show="isShow"><a href="/news/?type=0&page=0"><b>全部</b></a></li>
			<li @click="zujian='aiguo_yundong'"><a href="/news/?type=1&page=0"><b>知识</b></a></li>-->
		</ul>
		<component :is='zujian'></component>
		<router-view kerwin=""></router-view>
		
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
	$("li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
})
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
</style>

