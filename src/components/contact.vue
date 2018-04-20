<template>
	<div id="box">
		<h3>联系我们</h3>
		<p>用户交流QQ群</p>
		<ul>
			<li>
				<img src="http://www.imxingzhe.com/static/v3/contact/android-new.png" alt="" />
				<p>安卓用户交流群</p>
			</li>
			<li>
				<img src="http://www.imxingzhe.com/static/v3/contact/ios-test.png" alt="" />
				<p>iOS用户交流群</p>
			</li>
			<li>
				<img src="http://www.imxingzhe.com/static/v3/contact/all.png" alt="" />
				<p>全国用户交流群</p>
			</li>
		</ul>
		<p>行者官网QQ</p>
		<p>2093696425</p>
		<p>联系电话</p>
		<p>021-32600166</p>
		<p>官方微博</p>
		<p>行者软件</p>
		<p>微信公众号</p>
		<p>微信搜索：<span>imxingzhe</span></p>
		<img src="http://www.imxingzhe.com/static/v3/contact/xingzhe-weixinqrcode.png" alt="" />
		<p>联系我们及商务合作：<span>contact@imxingzhe.com</span></p>
		<p>联系我们及商务合作：<span>contact@imxingzhe.com</span></p>
		<p>联系我们及商务合作：<span>contact@imxingzhe.com</span></p>
		<div>
			上海办公地址：上海市杨浦区政学路77号 innospace+ 行者上海中心
		</div>
		<div>北京办公地址：北京市朝阳区酒仙桥东路10号冠捷北京西门二层 madnet 行者北京中心</div>
		<div>杭州办公地址：杭州市西湖区池华街398号丰盛九玺8号楼2101 行者杭州中心</div>
		<div>深圳办公地址：深圳宝安区新安六路御景苑众里创业社区 行者深圳中心</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped type="text/css">
	p,ul,li,span,body{
		margin: 0;
		padding: 0;
		font-size: 0.08rem;
	}
	li{
		list-style: none;
	}
	img{
		display: block;
		border: none;
		width: 80%;
	}
	h3{
		font-size: 0.125rem;
	}
	#box{
		padding: 0.04rem 0.04rem;

		ul{
			overflow:hidden;
			li{
				float: left;
				width: 1.5rem;
				height:1.5rem;
				p{
					text-align: center;
					line-height: 0.25rem;
				}
			}
		}
		p{
			line-height: 0.25rem;
			span{
				color: #0086B3;
			}
		}
		p:nth-of-type(2n+3){
			text-indent: 0.15rem;
		}
		div{
			font-size: 0.08rem;
			line-height: 0.25rem;
		}
	}
	
</style>