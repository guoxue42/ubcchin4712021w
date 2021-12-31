<!-- 这个页面是主页面 -->

<template>
	<div style="text-align: center;text-shadow: 5px 5px 5px #000000; ">
		
	<div class="main_body">
	</div>	

	 
	<!-- #3 转页面 -->
	<div style="height:180px"></div>

	<el-main class="thirdBlock">
		<!-- <img src="../../assets/等待.gif"></img> -->
		<el-row>
			<!-- <h1 style='font-size:200px;color:#ffffff;font-family:"汉仪行楷";'>信而好古，述而有作</h1> -->
			<img height=200 src="../../assets/Logo5.png"></img>
		</el-row>
		<!-- <el-image src=></el-image> -->
		<el-row :gutter="18">
		  <el-col :span="18" :offset="3">
			  <p v-html="this.开头" style='font-size:60px; margin-top:0px;color:#ffffff;
			  text-align:left; font-weight:bold;
			  font-family:"宋体"'>
			  <!--空格-->
			  	<!-- {{this.开头}} -->
			  </p>
			  
		  </el-col>
		</el-row>
		
		<el-row >
			
		  <!-- <el-button round type="warning" @click='buttonRoute("guHanYu")'>首页</el-button>
		  -->
		  <!-- <el-button round type="primary" @click='buttonRoute("langSong")'>古文朗诵</el-button>
		  <el-button round type="success" @click='buttonRoute("xinJie")'>古文新解</el-button>
		 --><!-- <el-button type="info" @click='buttonRoute("6-1")'>秦汉</el-button>
		  <el-button type="warning" @click='buttonRoute("7-1")'>古代汉语语法</el-button>
		  <el-button type="danger" @click='buttonRoute("2-1")'>作品锦集</el-button> -->
		</el-row>
	</el-main>

		<div style="height:180px"></div>
	
	<!-- #1 图片 -->
	<!-- <div style="height:300px"></div> -->
<!-- 	<el-carousel indicator-position="outside" height="400px">
		
	  <el-carousel-item v-for="item in carousel" :key="item.idx">
		<touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease">
		
		<div >
			<img style="position:relative;" :src="item.url" height=400></img>
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
			  ],
			  开头: "&nbsp;&nbsp;先秦两汉时期，中华文化璀璨夺目，诸子百家辉映古今。\
				满怀对传统文化的深情，同学们决定选修中文491。诵读《论语》\
《孟子》，恰似聆听仁者谆谆教诲；品味《老子》《庄子》\
宛如面受先哲殷殷释惑。孔子说：“信而好古，述而不作。”\
时代发展到了二十一世纪，同学们不仅慨然以传承中华文化为使命，\
而且毅然吟诵经典、书写心得，表达对传统文化的厚爱。\
谨把同学们的优秀作品汇集为《信而好古，述而有作》\
以纪念这学期共同研读古文的美好时光。",
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
		background-image: url(../../assets/长城2.jpg);
		/* background-image: url(../../assets/MicrosoftTeams-image.png); */
		position:fixed;
		/* opacity:0.7; */
		z-index: -1;
	}
	
	.el-button{
		height:140rem;
		width:300rem;
		font-size: 50rem;
		font-family:"新宋体";
	}
	
	.el-carousel__item{
		  /* height: 500%; */
	} 
	
	.el-carousel__arrow 
	.el-carousel__arrow--left{
		width:500rem;
		height:500rem;
	}
	
	.el-carousel__item h3 {
	  color: #475669;
	  font-size: 18rem;
	  opacity: 0.75;
	  line-height: 300rem;
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
		/* height:520rem; */
		/* width:50%; */
		/* text-align: right; */
		/* background-size:500px 350px; */
		/* background-image:url(../../assets/桃花.jpg); */
	}
	
</style>
