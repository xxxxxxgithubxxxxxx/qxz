<template>
	<div>
		
	<ul id="top_list">
		<li>行者报名</li>
		<li>骑行</li>
		<li>越野跑</li>
		<li>徒步</li>
	</ul>
	<dl id="conntent_lest" v-for="data,i in datalist">
		<dt><img :src='data.pic_url'></dt>
		<dd class="list_title"><span>{{data.title}}</span><span class="com_type_false" v-if="data.com_type">未报名</span><span class="com_type_true" v-else>报名中</span></dd>
		<dd class="list_time"><span >时间：{{
			(function(x){
				var d = new Date(x);
		      var Y = d.getFullYear();
		      var M = d.getMonth()+1;
		      if (M<=9) {
		        M = '0'+M;
		      }else{
		        M = M;
		      }
		      var day = d.getDate();
		      if (day<=9) {
		        day = '0'+day
		      }else{
		        day = day;
		      }
		       return Y+'-'+M+'-'+day;
			}(data.end_time))
		}}</span><span>地点：{{
			data.host_place.length<2?data.host_place[0]:data.host_place[data.host_place.length-1]+"&nbsp"+data.host_place[data.host_place.length-2]
			}}</span></dd>
		<dd class="list_keyword"><span>{{data.com_sport_type}}</span><span v-for="keyword in data.tags">{{keyword}}</span></dd>
		<dd class="list_recommend" v-if="data.top"> 行者推荐</dd>
		<dd class="list_enroll" v-if="data.top_index">行者报名</dd>
	</dl>
</div>
</template>
<script>
import axios from "axios";
export default{
	data(){
		return{
			datalist:[],
		}
	},
	computed:{
		
	},
	mounted(){
		//ajax请求
		axios.get("/api/v4/competitions_processing/?limit=500&page=0").then(res=>{
			this.datalist=res.data.data;
			console.log(res.data.data[0].end_time);
		}).catch(err=>{
			console.log(err);
		})
	}
} 
</script>
<style lang="scss" scoped type="text/css">
	
	ul,li,dd,dl,dt,p,span,body{
		padding:0;
		margin:0;
	}
	li{
		list-style: none;
	}
	img{
		border:none;
		display: block;
	}
	#top_list{
		width:100%;
		margin-top: 0.25rem;
		margin-bottom: 0.04rem;
		overflow: hidden;
		display:flex;
		justify-content:space-around;
		height:0.3rem;
		
		li{

			font-size: 0.125rem;
			width:20%;
			color: #fff;
			background-image:url("https://static.imxingzhe.com/tuchuangupload/1517974438.jpg");
			background-size:0.74rem;
			line-height:0.3rem;
			text-align: center;
		}
	}
	#conntent_lest{
		position: relative;
		padding: 0.06rem 0;
		width:95%;
		margin: 0 auto;
		dt{
			img{
				width: 100%;
			}
		}
		.list_title{
			display:flex;
			justify-content:space-between;
			span:nth-of-type(1){
				float: left;
				font-size:0.075rem;
				color: #000000;
				line-height:0.155rem;
			}
			span:nth-of-type(2){
				height: 0.1rem;
				padding: 0.02rem;
				float: right;
				color:#fff;
				font-size: 0.055rem;
				line-height: 0.1rem;
				margin-top: 0.025rem;
				margin-bottom: 0.025rem;
			}
			.com_type_false{
				background: #999999;
			}
			.com_type_true{
				background:#17a255;
			}
		}
		.list_time{
			font-size: 0.05rem;
			color: #a2a2a2;
			line-height:0.1rem;
			span:first-child{
				padding-right: 20%;
			}	
		}
		.list_keyword{
			margin-top: 0.04rem;
			font-size:0.08rem;
			span{
				font-size: 0.05rem;
				color: #219edc;
				line-height:0.09rem;
				border: 0.005rem solid #219edc;
				border-color: #219edc;
				padding: 0.005rem;
				margin-right: 0.04rem;
			}
		}
		.list_recommend{
			position: absolute;
			top: 0.04rem;
			left: 0.12rem;
			display: block;
			width: 0.35rem;
			height: 0.4rem;
			background:red;
			font-size: 0.055rem;
			color: #FFFFFF;
			font-size: 0.11rem;
			line-height:0.14rem;
			text-align: center;
		}
		.list_enroll{
			position: absolute;
			top:0.14rem;
			right: 0;
			display: block;
			width: 0.75rem;
			height: 0.2rem;
			background: #37b5ef;
			font-size: 0.055rem;
			font-size: 0.11rem;
			line-height: 0.2rem;
			color: #FFFffF;
			text-align: center;
			border-top-left-radius: 0.1rem;
			border-bottom-left-radius: 0.1rem;
		}
	}
</style>
