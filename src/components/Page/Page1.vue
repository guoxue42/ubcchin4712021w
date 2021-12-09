<!-- 这个页面是主页面 -->

<template>
	
	<div>
	<!-- #1 图片 -->
	<el-carousel indicator-position="outside" height="520px">
	  <el-carousel-item v-for="item in carousel" :key="item.idx">
	    <!-- <h3>{{ item.url }}</h3> -->
		<img :src="item.url" height=480></img>
		<!-- 1250 x 520 -->
	  </el-carousel-item>
	</el-carousel>
	
	<!-- #2 介绍 -->
	<div style="height:40px"></div>
	<!-- <img src="../../assets/孔子1.jpg"></img> -->
	<el-container >
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
		  
		<!--    <el-image 
		      style=" width: 300px; height: 300px;"
		      :src="url" 
		      :preview-src-list="srcList">
		    </el-image> -->
			
	  </el-main>
	</el-container>
	
	
	
	
	<!-- #3 转页面 -->
	<div style="height:40px"></div>
	<el-container>
	<el-main class="thirdBlock"
	>
		<img src="../../assets/等待.gif"></img>
		<el-row>
		  <el-button>夏商周</el-button>
		  <el-button type="primary">春秋</el-button>
		  <el-button type="success">战国</el-button>
		  <el-button type="info">秦汉</el-button>
		  <el-button type="warning">古代汉语语法</el-button>
		  <el-button type="danger">作品锦集</el-button>
		</el-row>
	</el-main>
	</el-container>
	
	
	<!-- #4 感谢页面 -->
	<div style="height:40px"></div>
	<el-container>
		<el-main class="fourthBlock" style="font-family: PingFang SC;">
			
			<h1>​致谢</h1>
			<!-- <h3>感谢指导老师刘学顺以及CHIN471全体学生的积极参与</h3>​ -->

		</el-main>
	</el-container>
	
	<!-- #5 感谢页面 -->
	<div style="height:40px"></div>
	<el-container  class="fourthBlock" style="height:200px;
			background-color:#99A9BF;">
		<el-main style="text-align:left;">
			<div style="height:10px;"></div>
			<img hre<!-- f="https://asia.ubc.ca/"
				src="../../assets/ubc_log.webp.jpg" 
				height="120" ></img>
				<br>
			© UBC CHIN471 2021W. -->
		</el-main>
		<el-main>
			<h1>制作</h1>
			<!-- <h3>指导老师：刘学顺</h3> -->
		</el-main>
	</el-container>
	
	</div>
</template>

<script>
	// import el-image
	
	export default {
		data(){
		  return {
			  carousel: [
				  {url: require("../../assets/曲阜.jpeg"),idx: 0},
				  {url: require("../../assets/国画_刘宗汉.jpeg"),idx: 1},
				  {url: require("../../assets/高山流水.jpg"),idx: 2}
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
	
	.el-carousel__item{
		  /* height: 500%; */
	} 
	
	.el-carousel__item h3 {
	  color: #475669;
	  font-size: 18px;
	  opacity: 0.75;
	  line-height: 300px;
	  margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
	  background-color: #ffffff;
	  
	  background-image: url(../../assets/梅花.jpg);
	}
	
	.el-carousel__item:nth-child(2n+1) {
	  background-color: #ffffff;
	  background-image: url(../../assets/梅花.jpg);
	}
	
	.thirdBlock{
		/* height:520px; */
		/* width:50%; */
		/* text-align: right; */
		/* background-size:500px 350px; */
		background-image:url(../../assets/桃花.jpg);
	}
	
</style>
