<template>
	
	<div>
	
		<div  class="el-menu-demo">
		<el-menu :default-active="activeIndex"
		   mode="horizontal" @select="handleSelect"
			router
			:background-color="backgroundColor"
			class="el-menu-main"
			style="align-items:center;  
    align-items: center;
    justify-content:center;"
			>
		  
		  <el-menu-item index="0" class="taiji">
			  <a href="https://asia.ubc.ca/" target="_blank">
			  
			  <img 
			    class="taiji_tu"
			    href="https://asia.ubc.ca/"
				src="../assets/太极_无背景.png" 
				height="100" ></img>
				
				</a>
		  </el-menu-item>
		  
		  <el-menu-item index="/"> 2021冬季中文491作品展示 </el-menu-item>
		  
		  <!-- <el-menu-item index="guHanYu">首页</el-menu-item> -->
		  <el-menu-item index="langSong">古文朗诵</el-menu-item>
		  <el-menu-item index="xinJie">古文新解</el-menu-item>
		
		<el-menu-item index="0" class="taiji">
					  <img 
					    class="long"
						style=""
						src="../assets/Long.png" 
						height="100" ></img>
						
						</a>
		</el-menu-item>
		
		</el-menu>
		
		</div>
		
	</div>
	
</template>

<script>
	export default {
		data(){
		  return {
			  activeIndex: "1",
			  backgroundColor: "#ffffff",
			  scrollUpID: null
		  }
		},
		methods: {
			handleSelect(a){
				
				// this.scrollUpID = setInterval(() => {
				// 	console.log(document.documentElement.scrollTop)
				// 		document.documentElement.scrollTop -= 10;
				// 		if(document.documentElement.scrollTop <= 0){
				// 			clearInterval(this.scrollUpID)
				// 		}
				// }, 100, this)
				// console.log(document.documentElement.scrollTop)
			document.documentElement.scrollTop = 0;
		
				this.$notify({
							title: '诺！',
							type: 'success',
							// dangerouslyUseHTMLString: true,
							message: '正为君请新的页面!',
							duration: 1500
				})
			},
		}
	}
</script>

<style scoped>
	.taiji_tu{
		/* transform:rotate(180deg); */
		margin-top:-20px;
		animation: rotate360 7s linear 0.2s infinite;
	}
	
	@keyframes rotate360 {
	
	  100% {
	    transform: rotate(360deg);
	  }
	}
	
	.el-menu-item{
		height:106px;
		line-height: 106px;
		/* color:red; */
		font-size:35px;
		margin-left:40px;
		margin-top:10px;
		font-family:"汉仪行楷";
		/* left:-30px; */
	}
	el-menu-item{
		/* opacity: 0.2; */
	}
	.el-menu-demo{
		position:relative;
		/* left:100%; */
		opacity: 0.8;
		/* left:40%; */
		/* text-align:center; */
	}
	.el-menu-main{
		width:1000%;
		
	}
	.taiji{
		/* position:absolute; */
		/* left:10px; */
		/* height: px; */
	}
</style>
