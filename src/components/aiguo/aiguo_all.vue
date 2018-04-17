	<template>
		<div>
			<ul>
				<li>狂魔车队</li>
				<li><h3>国产GPS码表</h3></li>
				<li>个问佛为了建一我佛微问佛为了建一我佛问佛为了建一我佛积分</li>
				<li><img />图片</li>
			</ul>
		</div>
	</template>
	<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				datalist:[111,222,333]
			}
		},
		computed:{

		},
		mounted(){
			axios.get("/api/v4/new_get_topics?start=0&count=10&channel_id=0").then(res=>{
				console.log(res);
			}).catch(function(err){
				console.log(err);
			})
		}
	}
	</script>
	<style lang="scss" scoped type="text/css">
		div{
			background: yellow;
		}
	</style>