<template>
	<div>
	<ul id="top_list">
		<li>行者报名</li>
		<li>骑行</li>
		<li>越野跑</li>
		<li>徒步</li>
	</ul>
	<dl id="conntent_lest">
		<dt><img src="//oi27flgao.qnssl.com/o_1cb6du5151ed11nau3nveu1qvsh.jpg?imageView2/1/w/690/h/274/format/jpg/interlace/1"></dt>
		<dd class="list_title"><span>漫步湖光春色 腾飞彩虹趣跑</span><span>报名中</span></dd>
		<dd class="list_time"><span>时间：2018-01-12</span><span>地点：江苏省苏州市</span></dd>
		<dd class="list_keyword"><span>跑步</span><span>休闲</span><span>风景好</span></dd>
		<dd class="list_recommend">行者推荐</dd>
		<dd class="list_enroll">行者报名 s </dd>
	</dl>
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
	
	ul,li,dd,dl,dt,p,span,body{
		padding:0;
		margin:0;
	}
	li{
		list-style: none;
	}
	img{
		border:none;
		display: block;
	}
	#top_list{
		width:100%;
		overflow: hidden;
		display:flex;
		justify-content:space-around;
		li{
			height: 50px;
			width:20%;
			background-image:url("https://static.imxingzhe.com/tuchuangupload/1517974438.jpg");
			line-height: 50px;
			text-align: center;
		}
	}
	#conntent_lest{
		padding: 10px 0px;
		width:95%;
		margin: 0 auto;
		dt{
			img{
				width: 100%;
			}
		}
		.list_title{
			display:flex;
			justify-content:space-between;
			span:first-child{
				font-size: 12px;
				color: #000000;
				line-height:24px;
			}
			span:nth-of-type(2){
				background:#17a255;
				color:#fff;
				padding: 2px;
				margin-top: 6px;
			}
		}
		.list_time{
			font-size: 10px;
			color: #a2a2a2;
			line-height:20px;
			span:first-child{
				padding-right: 20%;
			}	
		}
		.list_keyword{
			span{
				font-size: 10px;
				color: #219edc;
				line-height:20px;
				border: 1px solid #219edc;
				border-color: #219edc;
				padding: 1px;
				margin-right: 8px;
			}
		}
		.list_recommend{
			
		}
		.list_enroll{
			margin-right: 8px;
		}
	}
</style>
