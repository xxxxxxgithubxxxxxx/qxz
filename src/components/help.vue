<template>
	<div id="box">
		<p class="top">帮助中心</p>
		<div>
			<ul>
				<li>
					<p class="iconfont icon-shouji"></p>
					<p>APP使用</p>
				</li>
				<li>
					<p class="iconfont icon-genggaishouhuodizhi"></p>
					<p>路书相关</p>
				</li>
				<li>
					<p class="iconfont icon-iocnshiping"></p>
					<p>视频介绍</p>
				</li>
				<li>
					<p class="iconfont icon-iconshousuo"></p>
					<p>积分优惠</p>
				</li>
				<li>
					<p class="iconfont icon-lianxidianyuan"></p>
					<p>联系我们</p>
				</li>
				<li>
					<p class="iconfont icon-youjian"></p>
					<p>问题反馈</p>
				</li>
			</ul>
			<p class="wenti">常见问题解答</p>
			<p>GPS定位常见问题</p>
			<p>运动首页设置</p>
			<p>语音播报问题</p>
			<p>离线地图</p>
			<p>注册登录问题</p>
			<p>行者积分问题</p>
			<p>后台运行异常中断解决办法（安卓）</p>
			<p class="buttom">没有找到遇到的问题？你可以<span>与我们取得联系</span>。</p>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{

		}
	},
	computed:{

	}
}
</script>
<style lang="scss" scoped type="text/css">
	p,ul,li,span,body{
		margin: 0;
		padding: 0;
		font-size: 0.1rem;
	}
	li{
		list-style: none;
	}
	img{
		display: block;
		border: none;
		width: 80%;
	}
	#box{
		background: #E9E9E9;

		.top{
			line-height: 0.3rem;
			background: #FFFFFF;
			text-indent: 0.15rem;
		}
		div{
			padding: 0.1rem;
			ul{
				overflow:hidden;
				li{
					margin: 0.1rem;
					width: 45%;
					margin-left: 0.05rem;
					margin-right: 0.1rem;
					float: left;
					background: #FFFFFF;
					text-align: center;
					p{
						font-size: 0.1rem;
						color: #000000;
						line-height: 0.2rem;
					}
					p:nth-of-type(1){
						margin-top: 0.3rem;
						font-size: 0.4rem;
						line-height: 0.3rem;
						color: #0000FF;
					}
					p:nth-of-type(2){
						line-height: 0.4rem;
						margin-bottom: 0.1rem;
						margin-top: 0.1rem;
						
					}
				}
			}
			.wenti{
				line-height: 0.3rem;
			}
			p{
				font-size: 0.13rem;
				color: #0000FF;
				line-height: 0.5rem;
			}
			.buttom{
				margin-top: 1rem;
				color: #000000;
				span{
					font-size: 0.13rem;
					color: #0000FF;
				}
			}
		}
	}
</style>