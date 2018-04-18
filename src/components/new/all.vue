<template>
	<div id="box">
		<ul id="conntent_List">
			<li id="show">
				<img src="../../assets/qxz.jpg"/>
				<div id="content">
					<p id="title">
						浙江竟有这样美的地方，感觉我的车白骑了
					</p>
					<p id="user-bo">
						<span>
							kerwin
						</span>
						<span id="updata_time">
							2018.04.17
						</span>
					</p>
				</div>
				
			</li>
			<li id="show">
				<img src="../../assets/qxz.jpg"/>
				<div id="content">
					<p id="title">
						浙江竟有这样美的地方，感觉我的车白骑了
					</p>
					<p id="user-bo">
						<span >
							kerwin
						</span>
						<span id="updata_time">
							2018.04.17
						</span>
					</p>
				</div>
				
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return {
			}
		},
		mounted(){
			axios.get("/api/v4/new_get_topics?start=0&count=10&channel_id=0").then(res=>{
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
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
					margin-top: 0.2rem;
					#updata_time{
						float: right;
					}
				}
			}
		}
			
	}
	
</style>