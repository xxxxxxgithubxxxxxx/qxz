<template>
	<div id="home">
		<header>
			<h1>行者，专业户外运动软件</h1>
			<p>当前行者用户运动总里程</p>
			<p class="number">
				<span id="numberzhi"></span>
				<span>{{num1}}公里</span>
				<!--<input type="text" v-model="num" />-->
			</p>
			<a class="abutom" href="http://a.app.qq.com/o/simple.jsp?pkgname=im.xingzhe">立即下载</a>
		</header>
		<aside>
			<div>
				<ul class="wrip">
					<h2>行者路书</h2>
					<p>提前规划制作行者路书，跟随路书让你的出行安全无忧，再也不担心迷路！还能发现更多精彩路书</p>
				</ul>
				<img src="http://cdn.bi-ci.com/img/index/home-side-lushu.jpg" alt="行者路书" />
			</div>
			<div>
				<ul class="wrip">
					<h2>数据分析</h2>
					<p>提前规划制作行者路书，跟随路书让你的出行安全无忧，再也不担心迷路！还能发现更多精彩路书</p>
				</ul>
				<img src="http://cdn.bi-ci.com/img/index/home-side-shuju.jpg" alt="数据分析"/>
			</div>
			<div class="div3">
				<ul class="wrip">
					<h2>智能设备</h2>
					<p>提前规划制作行者路书，跟随路书让你的出行安全无忧，再也不担心迷路！还能发现更多精彩路书</p>
				</ul>
				<img src="http://cdn.bi-ci.com/img/index/home-side-shebei.jpg" alt="智能设备"/>
			</div>
			<div>
				<ul class="wrip">
					<h2>赛段挑战</h2>
					<p>提前规划制作行者路书，跟随路书让你的出行安全无忧，再也不担心迷路！还能发现更多精彩路书</p>
				</ul>
				<img src="http://cdn.bi-ci.com/img/index/home-side-saiduan.jpg" alt="赛段挑战" />
			</div>
		</aside>
		<footer class="footer">
			<i class="play-button iconfont icon-play" id="playButtom" title="播放"></i>
			<video class="video"  id="video1" src="http://oibjq9rlf.qnssl.com/video-Xingzhe_100s_FINAL_720P.mp4" type="video/m4v" poster="//cdn.bi-ci.com/vue_static/images/video_poster.jpg" >
			</video>
			<p>Copyright © 2015 鲁ICP备13005877号-1</p>
		</footer>
	</div>
</template>
<script>
	import axios from "axios";
export default{
	data(){
		return{
			num:0,
			value6:'',
			isshow:true
		}
	},
	computed:{
		
	},
	mounted(){
		$(function(){
			$("aside").children("div").find("ul").animate({opacity:"0"},"slow").end().click(function(){
				$(this).find("ul").stop().animate({opacity:'1'},'slow').show()
				.end().siblings().find("ul").stop().animate({opacity:'0'},"slow");
			})
			/*setInterval(function(){
				axios.get("/api/v3/total_distance/").then(res=>{
					this.num=res.data.total_distance;
					return this.num;
					console.log(this.num);
				})
			},5000)*/
		})
	},
	computed:{
		num1:function(){
			return 3000;
		}
	},
	updated(){
		console.log(num2);
	}
	
}

</script>
<style lang="scss" scoped type="text/css">
	#home{
		font-size: 0.12rem;
		background:#1a1a1c;
		header{
			background: url(http://cdn.bi-ci.com/img/index/top_banner.jpg);
			background-repeat:no-repeat ;
			background-size: cover;
			color: #fff;
			width: 100%;
			text-align: center;
			padding-bottom: 0.15rem;
			.number{
				font-size: 0.2rem;
				height: 0.5rem;
				line-height: 0.5rem;
				span:nth-of-type(2){
					font-size: 0.07rem;
				}
			}
			h1{
				height: 0.75rem;
				line-height: 0.75rem;
			}
			.abutom{
				display: block;
				color: #fff;
				text-decoration: none;
				margin: 0 auto;
				width: 1rem;
				height: 0.3rem;
				line-height: 0.3rem;
				background:linear-gradient(#82d3fe,#019adf);
			}
		}
		aside{
			padding: 0.05rem 0rem 0.2rem 0rem;
			display: flex;
			flex-wrap:wrap;
			justify-content:space-around;
			box-sizing: border-box;
			div{
				width: 48%;
				height: 1.5rem;
				position: relative;
				margin-top: 0.1rem;
				img{
					width: 100%;
					height: 100%;
					}
				.wrip{
					color: #fff;
					background: #189adb;
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					display:none;
				}
			}
		}
		footer{
			p{
				height: 0.5rem;
				width: 100%;
				line-height: 0.5rem;
				font-size: 0.07rem;
				color: #fff;
				text-align: center;
			}
			.video{
				width: 100%;
			}
		}
	}
</style>