<template>
	<div id="">
		zs
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
			axios.get("/api/v4/new_get_topics?start=0&count=20&channel_id=0").then(res=>{
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
		}
	}
	
</script>

<style>
	div{
		font-size: 0.12rem;
	}
</style>