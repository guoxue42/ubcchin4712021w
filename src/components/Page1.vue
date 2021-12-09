<!-- 这个页面是主页面 -->

<template>
	
	<el-carousel indicator-position="outside" height="520px">
	  <el-carousel-item v-for="item in carousel" :key="item.idx">
	    <!-- <h3>{{ item.url }}</h3> -->
		<img :src="item.url" height=480></img>
		<!-- 1250 x 520 -->
	  </el-carousel-item>
	</el-carousel>
	
</template>

<script>
	export default {
		data(){
		  return {
			  carousel: [
				  {url: require("../assets/曲阜.jpeg"),idx: 0},
				  {url: require("../assets/国画_刘宗汉.jpeg"),idx: 1},
				  {url: require("../assets/鲁国.png"),idx: 2}
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
	  
	  background-image: url(../assets/梅花.jpg);
	}
	
	.el-carousel__item:nth-child(2n+1) {
	  background-color: #ffffff;
	  background-image: url(../assets/梅花.jpg);
	}
	
	
</style>
