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
		<el-row>
			<img src="../../assets/Logo4.png"></img>
		</el-row>
		<el-row>
				<!-- <div style="height:150px"></div> -->
		</el-row>
		<!-- <el-image src=></el-image> -->
		<el-row>
		<img src="../../assets/LangSong2.png" width=600></img>
		  <!-- <el-button round type="warning" @click='buttonRoute("guHanYu")'>首页</el-button>
		  <el-button round type="primary" @click='buttonRoute("langSong")'>古文朗诵</el-button>
		  <el-button round type="success" @click='buttonRoute("xinJie")'>古文新解</el-button> -->
		  <!-- <el-button type="info" @click='buttonRoute("6-1")'>秦汉</el-button>
		  <el-button type="warning" @click='buttonRoute("7-1")'>古代汉语语法</el-button>
		  <el-button type="danger" @click='buttonRoute("2-1")'>作品锦集</el-button> -->
		</el-row>
	</el-main>

	<el-main>
		<el-row>
			<video height=380; src="../../assets/作品/惠子相梁何思炘.mp4" controls="controls"></video>
		</el-row>
		<el-row>
			<video height=380; src="../../assets/作品/道德经何思然.mp4" controls="controls"></video>
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
	
	
	<!-- #1 图片 -->
<!-- 	<div style="height:300px"></div>
	<el-carousel indicator-position="outside" height="500px">
		
	  <el-carousel-item v-for="item in carousel" :key="item.idx">
		<touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease">
		
		<div >
			<img style="position:relative;" :src="item.url" height=500></img>
			<div v-if="item.idx != 1">
				<p style="position:absolute; right:300px;top:80px;
					color:#ffff7f;
					font-size:20px;width:4px;height:100px;">
					{{item.text}}</p>
			</div>
			<div v-else>
				<p style="position:absolute; right:250px;top:80px;
					color:#aaffff;
					font-size:20px;width:4px;height:100px;">
					{{item.text}}</p>
				<p style="position:absolute; right:300px;top:80px;
					color:#aaffff;
					font-size:20px;width:4px;height:100px;">
					{{item.text2}}</p>
			</div>
			
			
		</div>
		</touch-ripple>
		
		
	  </el-carousel-item>
	</el-carousel>
	
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
			}
		},
		data(){
		  return {
			  carousel: [
				   {url: require("../../assets/国画_刘宗汉.jpeg"),
					text:"子曰 ：学而时习之不亦乐乎",
					idx: 0},
				   {url: require("../../assets/长城.jpg"),
					text:"子曰 ：学而时习之不亦乐乎",
					idx: 1},
				 //  {url: require("../../assets/曲阜.jpeg"),
					// text:"子曰 ：学而时习之不亦乐乎",
					// idx: 0},
				 //  {url: require("../../assets/国画_刘宗汉.jpeg"),
					// text:"人法地，地法天，天法道",
					// text2:"道法自然《 道德经 》",
					// idx: 1},
				 //  {url: require("../../assets/高山流水.jpg"),
					// text:"子曰：逝者如斯夫，不舍昼夜",
					// idx: 2}
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
		background-image: url(../../assets/GuiLin.jpg);
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
		background-color:rgba(1.0,0.0,1.0,0.0);
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
