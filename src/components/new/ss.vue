<template>
	<div id="box" v-infinite-scroll="loadMore">
		<ul id="conntent_List">
			<li id="show" v-for="data in datalist" @click="hellowdist(data.id)">
				<img :src="data.pic_url.split(';').slice(0,1)"/>
				<div id="content">
					<p id="title">
						{{data.title}}
					</p>
					<p id="user-bo">
						<span id="username">
							{{data.user.username}}
						</span>
						<span id="updata_time">
							{{data.create_time}}
						</span>
					</p>
				</div>
				
			</li>
			
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	import { Indicator } from 'mint-ui';
	
	export default {
		data(){
			return {
				datalist:[],
				current:0,
			}
		},
		mounted(){
			Indicator.open('加载中...');
			
			axios.get("/api/v4/new_get_topics?start=0&count=5&channel_id=5").then(res => {
				this.datalist = res.data;
				console.log(res)
				Indicator.close();
				
			}).catch(err=>{
				console.log(err)
			})
		},
		methods:{
			loadMore(){
				this.current+=10;
				if(this.current>300){
					
					return;
				}
				axios.get(`/api/v4/new_get_topics?start=${this.current}&count=5&channel_id=5`).then(res=>{
				this.datalist=[...this.datalist,...res.data];//这里合并两个数组
			})
			},
			hellowdist(id){
				console.log(id);
				this.$router.push(`/detail?id=${id}`)
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	#box{
		font-size: 0.12rem;
		padding: 0.08rem;
		
		img{
			display: block;
		}
	}
	#conntent_List{
		#show{
			color: #2d3033;
			height: 0.7rem;
			margin-top: 0.08rem;
			margin-bottom: 0.16rem;
			list-style: none;
			img{ 
				width:1.1rem; 
				height: 0.7rem; 
				float: left;
			}
			#content{
				margin-left:1.16rem ;
				height: 0.7rem;
				#user-bo{
					color: #cecece;
					margin-top: 0.36rem;
					#username{
						font-size: 0.02rem;
					}
					#updata_time{
						float: right;
						font-size: 0.04rem;
					}
				}
			}
		}
			
	}
	
</style>