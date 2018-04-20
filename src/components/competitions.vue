<template>
	<div id="bg_box">
	<ul id="top_list" @click="list_paging" v-if="top_list">
		<li>行者报名</li>
		<li>骑行</li>
		<li>越野跑</li>
		<li>徒步</li>
	</ul>
	<div
		v-infinite-scroll="loadMore"
	  	infinite-scroll-disabled="loading"
	 	infinite-scroll-distance="20"
		>
		<dl id="conntent_lest" 
		v-for="data,i in datalist" 
		@click="go_list(data.id)">
		<dt><img :src='data.pic_url'></dt>
		<dd class="list_title"><span>{{data.title}}</span><span class="com_type_false" v-if="data.com_type">未报名</span><span class="com_type_true" v-else>报名中</span></dd>
		<dd class="list_time"><span >时间：{{
			gettime(data.end_time)
		}}</span><span>地点：{{
			data.host_place.length<2?data.host_place[0]:data.host_place[data.host_place.length-1]+"&nbsp"+data.host_place[data.host_place.length-2]
			}}</span></dd>
		<dd class="list_keyword"><span>{{data.com_sport_type}}</span><span v-for="keyword in data.tags">{{keyword}}</span></dd>
		<dd class="list_recommend" v-if="data.top"> 行者推荐</dd>
		<dd class="list_enroll" v-if="data.top_index">行者报名</dd>
	</dl>
	<p class="jiazai">{{jiazai}}</p>
	</div>
</div>
</template>
<script>
import axios from "axios";
export default{
	data(){
		return{
			datalist:[],
			aaaa:1,
			loading:false,
			i:0,
			url:null,
			jiazai:"数据加载中....",
			top_list:true,
			top_list_value:null
		}
	},
	mounted(){
		//ajax请求
		
	},
	methods:{
		go_list(data_id){
			this.$router.push(`/competitions_details?id=${data_id}`);
		},
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
		},
		loadMore:function(){
			var old_datalist=this.datalist;
			if(old_datalist.length){
				this.url="/api/v4/competitions_done/?limit=10&page="+this.i;
			}else{
				this.url="/api/v4/competitions_processing/?limit=500&page=0";
			}
			if(!this.top_list.value){
				axios.get(this.url).then(res=>{
					this.datalist=res.data.data;
					this.datalist=[...old_datalist,...this.datalist];
					this.i++;
					if(res.data.data.length==0){
						this.loading=true;
						this.jiazai="没有跟多数据"
					}
				}).catch(err=>{
					console.log(err);
				})
			}else{
				old_datalist=[];
				axios.get(this.url).then(res=>{
					for(var i=0;i<res.data.data.length;i++){
						if(this.top_list_value==res.data.data[i].com_sport_type){
							this.datalist.push(res.data.data[i]);
						}
					}
					console.log(old_datalist,"-----",this.datalist,res.data.data[1]);
					this.datalist=[...old_datalist,...this.datalist];
					this.i++;
					if(res.data.data.length==0){
						this.loading=true;
						this.jiazai="没有跟多数据"
					}
				}).catch(err=>{
					console.log(err);
				})
				
			}	
//			axios.get(this.url).then(res=>{
//				this.datalist=res.data.data;
//				this.datalist=[...old_datalist,...this.datalist];
//				this.i++;
//				
//				if(res.data.data.length==0){
//					this.loading=true;
//					this.jiazai="没有跟多数据"
//				}
//			}).catch(err=>{
//				console.log(err);
//			})
		
		},
		list_paging(ev){
			this.top_list=false;
			this.top_list_value=ev.target.innerText;
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
	#top_list{
		width:100%;
		margin-top: 0.25rem;
		margin-bottom: 0.04rem;
		overflow: hidden;
		display:flex;
		justify-content:space-around;
		height:0.325rem;
		li{
			font-size: 0.125rem;
			width:20%;
			color: #fff;
			background-size:100%;
			line-height:0.325rem;
			text-align: center;
		}
		li:nth-of-type(1){
			background-image:url("https://static.imxingzhe.com/tuchuangupload/1517974438.jpg");
		}
		li:nth-of-type(2){
			background-image:url("https://static.imxingzhe.com/tuchuangupload/1517974583.jpg");
		}
		li:nth-of-type(3){
			background-image:url("https://static.imxingzhe.com/tuchuangupload/1520327726.jpg");
		}
		li:nth-of-type(4){
			background-image:url("https://static.imxingzhe.com/tuchuangupload/1518001917.jpg");
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
	.jiazai{
		color: #999999;
		font-size: 0.06rem;
	}
</style>
