<!-- 这个页面是主页面 -->

<template>
	
	<el-carousel indicator-position="outside" height="520px">
	  <el-carousel-item v-for="item in 4" :key="item">
	    <!-- <h3>{{ item }}</h3> -->
		<img src="../assets/曲阜.jpeg" height=520></img>
		<!-- 1250 x 520 -->
	  </el-carousel-item>
	</el-carousel>
	
</template>

<script>
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
	}
	
	.el-carousel__item:nth-child(2n+1) {
	  background-color: #ffff7f;
	  background-image: url(../assets/龙凤.png);
	}
	
	
</style>
