<template>
	<div>
		<ul id="ul1">
			<!-- <router-link tag="li" to="/home" activeClass="filmactive" @click="hello()">全部</router-link>
			<router-link tag="li" to="#" activeClass="filmactive" @click="zujina=jjujiji">运动直播</router-link>
			<router-link tag="li" to="#" activeClass="filmactive">二手交易</router-link>
			<router-link tag="li" to="#" activeClass="filmactive">装备讨论</router-link>
			<router-link tag="li" to="#" activeClass="filmactive">有问必答</router-link> -->
			<li @click="zujian='aiguo_all'" class="filmactive">全部</li>
			<li @click="zujian='aiguo_yundong'">运动直播</li>
			<li @click="zujian='aiguo_jiaoyi'">二手交易</li>
			<li @click="zujian='aiguo_taolun'">装备讨论</li>
			<li @click="zujian='aiguo_youwen'">有问必答</li>
		</ul>
		<div class="div1">
		<component :is="zujian"></component>
		</div>
		<router-view></router-view>
	</div>
</template>	
<script type="text/javascript">
import aiguo_all from '../components/aiguo/aiguo_all';
import aiguo_jiaoyi from '../components/aiguo/aiguo_jiaoyi';
import aiguo_taolun from '../components/aiguo/aiguo_taolun';
import aiguo_youwen from '../components/aiguo/aiguo_youwen';
import aiguo_yundong from '../components/aiguo/aiguo_yundong';
export default{
	data(){
		return{
			zujian:"aiguo_all",
			isshow:false
		}
	},
	computed:{
	},
	methods:{
		
	},
	components:{
	aiguo_all,
    aiguo_jiaoyi,
    aiguo_taolun,
    aiguo_youwen,
    aiguo_yundong
  }
}

$(function(){
	$("#ul1").children("li").click(function(){
		$(this).addClass("filmactive").siblings().removeClass("filmactive");
	});
})
</script>
<style lang="scss" scoped type="text/css">
	li{
		list-style:none;
	}
	div{
		font-size: 0.12rem;
		#ul1{
			position:fixed;
			
			width: 100%;
			height: 0.2rem;
			line-height: 0.2rem;
			display: flex;
			left: 0;
			top: 0.25rem;
			justify-content:space-around; 
			background:#fff;
			border-bottom:1px #ccc solid;
			li{

			}
		}
		.div1{
			padding-top:0.2rem;
		}
	}


 .filmactive{
		color: blue;
	} 
</style>