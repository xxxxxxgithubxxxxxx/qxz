	<template>
		<div>
			<ul v-for="data in datalist">
				<img src=""/>
				<li>{{data.username}}</li>
				<li><h3>{{data.title}}</h3></li>
				<li class="li3">{{data.content}}</li>
				<li><img />图片</li>
			</ul>
		</div>
	</template>
	<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				datalist:[]
			}
		},
		computed:{

		},
		mounted(){
			axios.get("/api/v4/new_get_topics?start=0&count=10&channel_id=0").then(res=>{
				console.log(res.data);
//				console.log(res.data.user.avatar);
				this.datalist=res.data;
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
				.li3{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
				}
			}
		}
	</style>