<template>
	<div id="box">
		<span id="a">
			行者
		</span>
		<span id="b">
			<i class="iconfont icon-category"></i>
		</span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
			
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	#box{
		height: 0.58rem;
		line-height: 0.58rem;
		background: dodgerblue;
		width: 100%;
		#a{
			font-style: oblique ;
			color: white;
			font-size: 0.4rem;
			margin-left: 0.2rem;
		}
		#b{
			display: block;
			width: 0.3rem;
			height: 0.3rem;
			border: 0.01rem solid white;
			color: grey;
			/*font-size: 0.001rem;*/
			/*padding : 0rem 0.06rem;*/
			line-height: 0.3rem;
			text-align: center;
			position: fixed;
			top: 0.4rem;
			right: 0.4rem;
		}
	}
</style>