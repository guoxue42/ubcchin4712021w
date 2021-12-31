<!-- 这个页面是主页面 -->

<template>
	<div>
		
	<div class="main_body">
	</div>	

	
	<!-- #2 介绍 -->
<!-- 	<div style="height:40px"></div> -->
	<!-- <img src="../../assets/孔子1.jpg"></img> -->
<!-- 	<el-container >
	  <el-aside width="650px" >
		  <h1>论语·学而篇</h1>
		  子曰：“学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？”
		  
		  　　有子曰：“其为人也孝弟，而好犯上者，鲜矣；不好犯上而好作乱者，未之有也。君子务本，本立而道生。孝弟也者，其为仁之本与！”
		  
		  　　子曰：“巧言令色，鲜矣仁！”
		  
		  　　曾子曰：“吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？”
		  
		  　　子曰：“道千乘之国，敬事而信，节用而爱人，使民以时。”
		  
		  　　子曰：“弟子入则孝，出则弟，谨而信，泛爱众，而亲仁，行有余力，则以学文。”
		  
		  　　子夏曰：“贤贤易色；事父母，能竭其力；事君，能致其身；与朋友交，言而有信。虽曰未学，吾必谓之学矣。”
		  
		  　　子曰：“君子不重则不威，学则不固。主忠信，无友不如己者，过，则勿惮改。”
		  
		  　　曾子曰：“慎终追远，民德归厚矣。”
		  
		  　　子禽问于子贡曰：“夫子至于是邦也，必闻其政，求之与，抑与之与？”子贡曰：“夫子温、良、恭、俭、让以得之。夫子之求之也，其诸异乎人之求之与？”
		  
		  　　子曰：“父在，观其志；父没，观其行；三年无改于父之道，可谓孝矣。”
		  
		  　　有子曰：“礼之用，和为贵。先王之道，斯为美。小大由之，有所不行。知和而和，不以礼节之，亦不可行也。”
		  
		  　　有子曰：“信近于义，言可复也。恭近于礼，远耻辱也。因不失其亲，亦可宗也。”
		  
		  　　子曰：“君子食无求饱，居无求安，敏于事而慎于言，就有道而正焉，可谓好学也已。”
		  
		  　　子贡曰：“贫而无谄，富而无骄，何如？”子曰：“可也。未若贫而乐，富而好礼者也。”子贡曰：“《诗》云：‘如切如磋，如琢如磨’，其斯之谓与？”子曰：“赐也，始可与言《诗》已矣，告诸往而知来者。”
		  
		  　　子曰：“不患人之不己知，患不知人也。”
		  
	  </el-aside>
	  <el-main style="text-align: center;">
		  <img src="../../assets/孔子1.jpg" height=300></img>
			
	  </el-main>
	</el-container>
	 -->
	 
	<!-- #3 转页面 -->
	<div style="height:150px"></div>

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
		height="900px" :autoplay="false"
		ref="carousel">
		
		<el-button style="position:relative;
				top:350px;right:500px;opacity:1.0;height:100px;width:200px;
				font-size:50px;z-index:100;" 
			round type="primary" @click="prevSlide">上一篇</el-button>
		<el-button style="position:relative;
					top:350px;left:500px;opacity:1.0;height:100px;width:200px;
					font-size:50px;z-index:100;" 
				round type="warning" @click="nextSlide">下一篇</el-button>  
			  

	  <el-carousel-item  v-for="item in carousel" :key="item.idx">
		<!-- <touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease"> -->
		
		<div >
			
			<el-main class="thirdBlock">
				<el-row>
					<div style="font-size:110px;font-family:'汉仪行楷';">{{item.text}}</div>
				</el-row>
				<el-row>
					<div style="font-size:30px;">{{item.text2}}</div>
				</el-row>
				<el-row :gutter="10">
				  <el-col :span="8" :offset="8">
					<p style="font-size:45px;margin-top:10px;">朗诵者：{{item.zuozhe}}</p>
					<p v-html="item.其它内容"
						style="text-align:left;font-size:55px;margin-top:10px;font-family:'';"></p>
				  </el-col>
				</el-row>
			</el-main>
			
			<div v-if="item.type == 'video'">
						<!-- <div style="height:50px"></div> -->
				<video height=650 style="margin-top:-50px;" :src="item.url" controls="controls"></video>
			</div>
			<div v-if="item.type == 'audio'">
					<!-- <div style="height:150px"></div> -->
				<audio style="transform:scale(2,2);" controls :src="item.url"></audio>
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
				document.documentElement.scrollTop = 0;
			},
			prevSlide(){
				this.$refs.carousel.prev()
				document.documentElement.scrollTop = 0;
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
		background-color:rgba(255,255,255,0.3);
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
