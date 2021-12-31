<!-- 这个页面是主页面 -->

<template>
	<div style="text-align: center;">
		
	<div class="main_body" :style="{'margin-top':backgroundMarginTop}">
	</div>	
		
	<!-- 	<div style="position:absolute;z-index:100;margin-top:-200px;
			height=10px;" >
			<img src="../../assets/叶.gif" >
		</div> -->
	 
	<!-- #3 转页面 -->
	<div :style="{'height':backgroundMarginTop}"></div>

	<el-main class="thirdBlock">
		<!-- <img src="../../assets/等待.gif"></img> -->
<!-- 		<el-row>
			<img src="../../assets/Logo4.png"></img>
		</el-row> -->
		<el-row>
				<!-- <div style="height:150px"></div> -->
		</el-row>
		<!-- <el-image src=></el-image> -->
		<el-row>
		<!-- <img src="../../assets/LangSong2.png" width=600></img> -->
		  <!-- <el-button round type="warning" @click='buttonRoute("guHanYu")'>首页</el-button>
		  <el-button round type="primary" @click='buttonRoute("langSong")'>古文朗诵</el-button>
		  <el-button round type="success" @click='buttonRoute("xinJie")'>古文新解</el-button> -->
		  <!-- <el-button type="info" @click='buttonRoute("6-1")'>秦汉</el-button>
		  <el-button type="warning" @click='buttonRoute("7-1")'>古代汉语语法</el-button>
		  <el-button type="danger" @click='buttonRoute("2-1")'>作品锦集</el-button> -->
		</el-row>
	</el-main>

   


	<!-- #1 图片 -->
	<div style="height:00px"></div>
	

	<el-carousel arrow="never" indicator-position="none" 
		:height="pageHeight" :autoplay="false"
		ref="carousel">
		
		<el-button 
				style="position:relative;
				top:250px;opacity:1.0;z-index:100;" 
				:style='{right:videoWidth, top:pageHeightHalf,
					"font-size":fontZuoZheSize,
					"height":buttonHeight,
					"width":buttonWidth}'
			round type="primary" @click="prevSlide">上一篇</el-button>
		<el-button style="position:relative;
					;opacity:1.0;z-index:100;" 
					
					:style='{left:videoWidth, top:pageHeightHalf,
					"font-size":fontZuoZheSize,
					"height":buttonHeight,
					"width":buttonWidth}'
				round type="warning" @click="nextSlide">下一篇</el-button>  
			  

	  <el-carousel-item  v-for="item in carousel" :key="item.idx">
		<!-- <touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease"> -->
		
		<div >
			
			
			<!-- <div v-if="item.type == 'audio' "
				:style='{height:pageHeightThird}'>
				</div> -->
			
			<el-main class="thirdBlock">
				<el-row>
					<div :style="{'font-size':fontTitleSize}"
					 style="font-family:'汉仪行楷';">{{item.text}}</div>
				</el-row>
				<!-- <el-row>
					<div style="font-size:15px;">{{item.text2}}</div>
				</el-row> -->
				<el-row :gutter="10">
				  <el-col :span="8" :offset="8">
					<p :style="{'font-size':fontZuoZheSize}"
					 style="margin-top:10px;text-shadow: 1px 1px 1px #FFFFFF;">
						朗诵者：{{item.zuozhe}}</p>
					<p v-html="item.其它内容"	
						:style="{'font-size':fontNeiRongSize}"
						style="text-align:left;margin-top:40px;font-family:'';
							text-shadow: 1px 1px 1px #FFFFFF; "></p>
				  </el-col>
				</el-row>
			</el-main>
			
			<div v-if="item.type == 'video'">
						<!-- <div style="height:50px"></div> -->
				<video :width="videoSetWidth" style="margin-top:-50px;" :src="item.url" controls="controls"></video>
			</div>
			<div v-if="item.type == 'audio'">
					<!-- <div style="height:150px"></div> -->
				<audio 
					style="transform:scale(1.3,1.3);" 
				controls :src="item.url"></audio>
			</div>		
			<!-- <p style="position:absolute; left:600px;top:80px;
				color:#ffff7f;
				font-size:20px;width:4px;height:100px;">
				{{item.text}}</p> -->
			
			
		</div>
		<!-- </touch-ripple> -->
		
		
	  </el-carousel-item>
	</el-carousel>
	
	<div style="height:150px"></div>

<!-- 	<el-main>
		<el-row>
			<video height=380; :src='require("../../assets/作品/惠子相梁何思炘.mp4")' controls="controls"></video>
		</el-row>
		<el-row>
			<video height=380; :src='require("../../assets/作品/道德经何思然.mp4")' controls="controls"></video>
		</el-row>
		<el-row>
			<audio controls :src="require('../../assets/作品/劝学严旭.mp3')"></audio>
		</el-row>
		<el-row>
			<audio controls :src="require('../../assets/作品/劝学张睿焘.mp3')"></audio>
		</el-row>
		<el-row>
			<audio controls :src="require('../../assets/作品/鱼我所欲也颜莘桐.mp3')"></audio>
		</el-row>
	</el-main>
	 -->
	
	

	</div>
</template>

<script>
	// import el-image
	
	export default {
		methods:{
			buttonRoute(e){
				// console.log(e,f)
				this.$router.push(e)
			},
			nextSlide(){
				this.$refs.carousel.next()
				// console.log(this.$refs.carousel.next())
				// document.documentElement.scrollTop = 0;
			},
			prevSlide(){
				this.$refs.carousel.prev()
				// document.documentElement.scrollTop = 0;
			}
		},
		computed:{
			backgroundMarginTop:function(){
				return -100*window.innerHeight/540 + "px"
			},
			buttonHeight:function(){
				return 50*window.innerHeight/540 + "px"
			},
			buttonWidth:function(){
				return 100*window.innerHeight/540 + "px"
			},
			fontTitleSize:function(){
				return 55*window.innerHeight/540 + "px"
			},
			fontZuoZheSize:function(){
				return 20*window.innerHeight/540 + "px"
			},
			fontNeiRongSize:function(){
				return 25*window.innerHeight/540 + "px"
			},
			pageHeight:function(){
				
				return window.innerHeight-20 + "px";
			},
			pageHeightHalf:function(){
				
				return window.innerHeight/2 + "px";
			},
			pageHeightThird: function(){
				
				return window.innerHeight/3 + "px";
			},
			videoSetWidth:function(){
				return 0.45*window.innerWidth-20 + "px";
			},
			videoWidth:function(){
				return 0.25*window.innerWidth + "px";
			},
		},
		mounted(){
			const that = this;
			window.onresize = ()=>{
				console.log("HERE")
				// window.innerWidth = document.body.clientWidth;
				// window.innerHeight = document.body.clientHeight;
				 this.$forceUpdate()
				 
			}
		},
		data(){
		  return {
			  // todos
			  carousel: [
				   {url: require("../../assets/作品/惠子相梁何思炘.mp4"),
						text:"惠子相梁",//庄子
						zuozhe:"何思炘",
						type:"video",
						idx: 0},
				   {url: require("../../assets/作品/道德经何思然.mp4"),
						text:"道德经",//老子
						zuozhe:"何思然",
						type:"video",
						idx: 1},
					{url: require('../../assets/作品/劝学严旭.mp3'),
						text:"劝学",
						// text2:"荀子",
						zuozhe:"严旭",
						type:"audio",
						其它内容:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;君子曰：学不可以已。\
					青，取之于蓝，而青于蓝；冰，水为之，而寒于水。",
						idx: 2},
					{url: require('../../assets/作品/劝学张睿焘.mp3'),
						text:"劝学",
						// text2:"荀子",
						zuozhe:"张睿焘",
						其它内容:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;吾尝终日而思矣，不如须臾之所学也；吾尝跂而望矣，\
						不如登高之博见也。",
						type:"audio",
						idx: 3},
					{url: require('../../assets/作品/鱼我所欲也颜莘桐.mp3'),
						text:"鱼我所欲也",//孟子
						zuozhe:"颜莘桐",
						其它内容:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生，亦我所欲也；义，亦我所欲也。二者不可得兼，\
						舍生而取义者也。",
						type:"audio",
						idx: 4},
					{url: require('../../assets/作品/述而莫浙安.mp3'),
						text:"论语·述而",//孟子
						zuozhe:"莫浙安",
						其它内容:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;子曰：三人行必有我师焉。择其善者而从之，其不善者而改之。",
						type:"audio",
						idx: 5},
			  ],
			  backgroundImage: require("../../assets/梅花.jpg"),
			  url: require("../../assets/孔子1.jpg"),
			  srcList: [
				  require("../../assets/孔子1.jpg")
			  ]
		  }
		},
	}	
</script>

<style scoped>
	.fourthBlock{
		height:100%;
		background-color:#99A9BF;
	}
	
	.main_body{
		background-repeat:no-repeat;
		background-size:100% 100%;
		width: 100%;
		height:100%;
		/* background-image: url(../../assets/高山流水.jpg); */
		/* background-image: url(../../assets/仙鹤.jpg); */
		/* background-image: url(../../assets/长城2.jpg); */
		/* background-image: url(../../assets/GuiLin.jpg); */
		/* background-image: url(../../assets/shan2.webp.jpg); */
		background-image: url(../../assets/云淡风轻.png);
		/*云淡风轻.png*/
		position:fixed;
		z-index: -1;
	}
	
	.el-button{
		/* transform:scale(0.8,0.8); */
		/* height:200px; */
	}
	
	.el-carousel__item{
		  /* height: 500%; */
	} 
	
	.el-carousel__arrow 
	.el-carousel__arrow--left{
		width:500px;
		height:500px;
	}
	
	.el-carousel__item h3 {
	  color: #475669;
	  font-size: 18px;
	  opacity: 0.75;
	  line-height: 300px;
	  margin: 0;
	}
	
	.el-carousel__item{
		/* background-color:rgba(255,255,255,0.3); */
		/* background-image: url(../../assets/长城.jpg); */
		/* background-image: url(../../assets/梅花.jpg); */
	}
	
	.el-carousel__item:nth-child(2n) {
	  /* background-color: #ffffff; */
	  
	}
	
	.el-carousel__item:nth-child(2n+1) {
	  /* background-color: #ffffff; */
	  /* background-image: url(../../assets/梅花.jpg); */
	}
	
	.el-carousel__indicators--outside button{
		color:#000000!important;
	}
	.thirdBlock{
		/* height:520px; */
		/* width:50%; */
		/* text-align: right; */
		/* background-size:500px 350px; */
		/* background-image:url(../../assets/桃花.jpg); */
	}
	
</style>
