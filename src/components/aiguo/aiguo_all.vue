	<template>
		<div>
			<ul v-for="data,key in datalist">
				<li class="litime">{{data.create_time}}</li>
				<li class="liname"><img class="headimg" :src="data.user.avatar" /><span>{{data.user.username}}</span></li>
				<!--{{data.user.avatar}}--> 
				<li>{{data.username}}</li>
				<li><h3>{{data.title}}</h3></li>
				<li class="li3">{{data.content}}</li>
				<li class="li4">
					<img v-if="!(data.pic_url.split(';')=='')" v-for="imgdata in data.pic_url.split(';').slice(0,3)" :src=imgdata />
				</li>
			</ul>
		</div>
	</template>
	<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				datalist:[],
				imgurl:[],
				user:[]
			}
		},
		computed:{

		},
		mounted(){
			axios.get("/api/v4/new_get_topics?start=0&count=10&channel_id=0").then(res=>{
//				console.log(res.data);
//				console.log(res.data.pic_url.split(';'),111);
				this.datalist=res.data;
//				this.user=res.data.user;
				console.log();
			}).catch(function(err){
				console.log(err);
			})
		}
	}
	</script>
	<style lang="scss" scoped type="text/css">
		div,ul,li{
			margin: 0;
			padding: 0;
		}
		li{
			list-style: none;
		}
		img{
			display: block;
		}
		div{
			font-size: 0.12rem;
			background: #ccc;
			ul{
				background: #fff;
				margin-bottom: 0.05rem;
				li{
					margin-left: 0.2rem;
				}
				.litime{ float: right; font-size: 0.1rem; }
				.liname{
					margin-left: 0rem;
					height: 0.25rem;
					line-height: 0.25rem;
					display: flex;
				}
				.li3{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
				}
				.li4{
					display: flex;
					img{
						width:0.75rem;
						height:0.75rem;
						margin-left: 0.05rem;
					}
				}
			}
			.headimg{
				border-radius: 50%;
				width: 0.25rem;
			}
		}
	</style>