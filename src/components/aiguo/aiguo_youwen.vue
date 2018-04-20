<template>
	<div v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="5"
  infinite-scroll-immediate-check="false">
		<ul v-for="data,key in datalist" @click="hellowdist(data.id)">
			<li class="litime">{{data.create_time}}</li>
			<li class="liname"><img class="headimg" :src="data.user.avatar" /><span>{{data.user.username}}</span></li>
			<!--{{data.user.avatar}}-->
			<li>{{data.username}}</li>
			<li>
				<h3>{{data.title}}</h3></li>
			<li class="li3">{{data.content}}</li>
			<li class="li4">
				<img v-if="!(data.pic_url.split(';')=='')" v-for="imgdata in data.pic_url.split(';').slice(0,3)" :src=imgdata />	
				<!--这里有问题-->
			</li>
		</ul>
		<p class="footerp" v-if="textsu"><span><mt-spinner type="fading-circle" color="rgb(100, 100, 100)":size="30"></mt-spinner></span></p>
	</div>
</template>
<script>
	import axios from 'axios';
	import { Indicator } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
	import { Spinner } from 'mint-ui';
	Vue.component(Spinner.name, Spinner);
	import Vue from "vue";
	export default {
		data() {
			return {
				datalist: [],
				imgurl: [],
				user: [],
				loading:false,
				current:0,
				textsu:false
			}
		},
		computed: {

		},
		mounted() {
			Indicator.open('加载中...');
			axios.get("/api/v4/new_get_topics?start=0&count=10&channel_id=6").then(res => {
//				console.log(res.data);
//				console.log(!(res.data[2].pic_url.split(';')==''));
				this.datalist = res.data;
				//				this.user=res.data.user;
				this.textsu=true;
				Indicator.close();
			}).catch(function(err) {
				console.log(err);
			})
		},
		methods:{
			loadMore(){
				this.current+=10;
				if(this.current>300){
					this.loading=true;
					this.textsu=false;
					return;
				}
				axios.get(`/api/v4/new_get_topics?start=${this.current}&count=10&channel_id=6`).then(res=>{
				this.datalist=[...this.datalist,...res.data];//这里合并两个数组
			})
			},
			hellowdist:function(id){
				this.$router.push(`/datalist?id=${id}`)
			}
		}
	}
</script>
<style lang="scss" scoped type="text/css">
	div,
	ul,
	li {
		margin: 0;
		padding: 0;
	}
	
	li {
		list-style: none;
	}
	
	img {
		display: block;
	}
	
	div {
		font-size: 0.12rem;
		background: #ccc;
		.footerp{
				background: #fff;
				text-align: center;
				span{
					display: block;
					width: 0.5rem;
					margin: 0 auto;
				}
			}
		ul {
			background: #fff;
			margin-bottom: 0.05rem;
			li {
				margin-left: 0.2rem;
			}
			.litime {
				float: right;
				font-size: 0.1rem;
			}
			.liname {
				margin-left: 0rem;
				height: 0.25rem;
				line-height: 0.25rem;
				display: flex;
			}
			.li3 {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
			.li4 {
				display: flex;
				img {
					width: 0.75rem;
					height: 0.75rem;
					margin-left: 0.05rem;
				}
			}
		}
		.headimg {
			border-radius: 50%;
			width: 0.25rem;
		}
	}
</style>