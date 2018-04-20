<template>
	<div id="bg_box">
		<dl id="conntent_lest" >
		<dt><img :src='datalist.pic_url'></dt>
		<dd class="list_title"><span>{{datalist.title}}</span>
			<span class="com_type_false" v-if="datalist.com_type">未报名</span><span class="com_type_true" v-else>报名中</span></dd>
		<dd class="list_keyword"><span>{{datalist.com_sport_type}}{{id}}</span><span v-for="keyword in datalist.tags">{{keyword}}</span></dd>
	</dl>
	<div id="conntent_details">
		<p>主办方：{{datalist.host}}</p>
		<p>比赛时间：{{
			 gettime(datalist.publish_time) 
		}}</p>
		<p>报名时间：{{ gettime(datalist.create_time)}}</p>
		<p>签到时间：{{ gettime(datalist.sign_time)}}</p>
		<p>签到地点：{{datalist.place}}</p>
	<ul>
		<li class="border_blue">赛事详情</li>
		<li>赛事组别</li>
		<li>成绩查询</li>
	</ul>
	<div v-html="datalist.description"></div></div>
	<div id="details_botton">
		<p>联系主办方</p>
		<p class="details_botton_blue">立即报名</p>
	</div>
</div>
</template>
<script>
import axios from "axios";
export default{
	data(){
		return{
			datalist:[],
			id:null
		}
	},
	mounted(){
			axios.get("/api/v4/competition_detail?competition_id="+this.$route.query.id).then(res=>{
				this.datalist=res.data.data;	
			}).catch(err=>{
				console.log(err);
			})
		},
	methods:{
		gettime:function(x){
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
		}
	},
	computed:{
		
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
				position: absolute;
				top: 0.4rem;
				right: 0;
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
	}
	#conntent_details{
		font-size:0.09rem;
		line-height:0.2rem;
		padding:0 0.07rem;
		margin: 0 auto;
		p,li{
			font-size: 0.07rem;
			color: #999999;
			line-height: 0.2rem;		
		}
		ul{
			display: flex;
			justify-content: space-around;
			li{
				color:blue ;
				float: left;
				line-height: 0.2rem;
				width:33.3%;
				text-align:center;
				padding:0.05rem 0;
			}
			.border_blue{
				border-bottom: 0.03rem solid blue;
			}
		}
	}
	#details_botton{
		font-size: 0.09rem;
		height:0.3rem;
		width: 100%;
		p{
			height:0.3rem;
			line-height: 0.3rem;
			float: left;
			width: 50%;
			text-align: center;
			color: #333333;
			border: 1px solid #CCCCCC;
		}
		p:nth-of-type(1){
			background: #FFFFFF;
			position: fixed;
			bottom:0;
			left: 0;
		}
		p:nth-of-type(2){
		
			position: fixed;
			bottom:0;
			left: 50%;
		}
		.details_botton_blue{
				background: deepskyblue;
		}
		
	}
</style>
