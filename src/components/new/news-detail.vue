<template>
	<div id="datalidiv">
		<!--<p v-if="isshow">
		<mt-spinner type="fading-circle" color="rgb(100, 100, 100)":size="30"></mt-spinner>
		</p>-->
		<header>
			<img class="imgheader" :src="user.avatar
"> 
			<ul>
				<li>{{user.username}}</li>
				<li>{{zuozhelist.create_time}}</li>
			</ul>
		</header>
		<!--内容区域-->
		<section>
			<h4>{{zuozhelist.title}}</h4>
			<p>{{zuozhelist.content}}</p>
			<img v-if="!(zuozhelist.pic_url.split(';')=='')" v-for="imgdata in zuozhelist.pic_url.split(';')" :src=imgdata /><!--这里是动态图片有就写入没有就不要-->
		</section>
		<!--评论区域-->
		<div class="pinlun" v-for="liuyanzhe in contentlist"> 
			
			<!--这个显示的是每个人的评论内容-->
			<div class="pinlunzhe">
				<img class="imgclass" :src="liuyanzhe.user.avatar">
				<ul>
					<li>{{liuyanzhe.user.username}}</li>
					<li>{{liuyanzhe.create_time}}</li>
				</ul>
			</div>
			<div class="liuyanpic">
				<div class="liuyanzhe">
					<p v-if="liuyanzhe.informed_username">回复<span>{{liuyanzhe.informed_username}}</span>：</p><p>{{liuyanzhe.content}}</p>
				</div>
					<img v-if="!(liuyanzhe.pic_url.split(';')=='')" v-for="pic in liuyanzhe.pic_url.split(';')" :src=pic />
			</div>
		</div>
		
		<!--留言区域-->
		<footer>
			写评语区域
		</footer>
	</div>
</template>

<script>
	import axios from 'axios';
	import { Indicator } from 'mint-ui';
	import Vue from "vue";
	export default{
		data(){
			return{
				zuozhelist:{zuozhelist:''},
				contentlist:'',
				user:[],
				isshow:true
			}
		},
		mounted(){
			Indicator.open('加载中...');
			Promise.all([axios.get(`/api/v4/topic_detail?topic_id=${this.$route.query.id}`),
				axios.get(`/api/v4/new_get_comments?topic_id=${this.$route.query.id}`)
				]).then(res=>{

//					console.log(res);
					this.zuozhelist = res[0].data.data;
					this.user = res[0].data.data.user;
					this.contentlist = res[1].data;
					this.isshow=false;
					Indicator.close();
//					console.log(this.zuozhelist,this.contentlist,this.user);
				})
		},
		computed:{
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	#datalidiv{
		font-size: 0.12rem;
			li{
				list-style: none;
			}
		header{
			display: flex;
			.imgheader{
				width: 0.25rem;
				height: 0.25rem;
				border-radius: 50%;
			}
			ul{
				li{
					font-size: 0.1rem;
					color: #999999;
				}
			}
		}
		.pinlun{
			border-top: 1px #ccc solid;
			.pinlunzhe{
				margin: 0.1rem 0rem;
				display: flex;
				img{
					width: 0.25rem;
					height: 0.25rem;
					border-radius: 50%;
				}
				ul{
					li{
						font-size: 0.06rem;
						color: #969696;
					}
				}
				
			}
			.liuyanpic{
				.liuyanzhe{
					margin-bottom: 0.1rem;
					display: flex;
					p{
						font-size: 0.04rem;
						margin-right: 0.05rem;
					}
					p:nth-of-type(1){
						span{
							color: deepskyblue;
						}
					}
					p:nth-of-type(2){
						
					}
				}
				img{
					width: 100%;
				}
			}
		}
		section{
			p{
				font-size: 0.06rem;
			}
			img{
				width: 100%;
			}	
		}
	}
</style>