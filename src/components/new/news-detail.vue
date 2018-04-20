<template>
	<div id="box">
		detail11----等着
		<p v-for="data in datalist">
			<img :src="data.pic_url"/>
		</p>
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default {
		data(){
			return {
				datalist:[],
				
			}
		},
		mounted(){
			axios.get("/api/v4/new_get_topics?start=0&count=10&channel_id=0").then(res => {
				this.datalist = res.data;
				console.log(res)
				Indicator.close();
				
			}).catch(err=>{
				console.log(err)
			});
		},
	}
</script>

<style>
	#box{
		font-size: 0.24rem;
	}
</style>