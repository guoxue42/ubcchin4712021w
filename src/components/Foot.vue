<template>
	<div class="fourthBlock" >
	<!-- #4 感谢页面 -->
	<!-- <div style="height:40px"></div> -->
<!-- 	<el-container>
		<el-main class="thirdBlock" style="font-family: PingFang SC;">
			
			<h1>​致谢</h1>
			<h3>感谢指导老师刘学顺以及CHIN491全体学生的积极参与</h3>​
		</el-main>
	</el-container>
	 -->
	
	<!-- #5 感谢页面 -->
	<div>
	<el-row :class="{textColorYang: textColorYang, 
		textColorYin: textColorYin}">
		<el-col :span="8"
			style="text-align:center;">

			<!-- <div style="height:10px;"></div> -->
			<!-- todos (transparent ) -->
			<img href="https://asia.ubc.ca/"
				src="../assets/ubc_无背景.png" 
				height="200" ></img>
				<br>
				<h1 >© UBC CHIN491 2021W. </h1>
		</el-col>
		<el-col :span="8"
			style="text-align:center;" class="thirdBlock" >
			
			<h1 >​致谢</h1>
			<h3>感谢指导老师刘学顺以及CHIN491全体学生的积极参与</h3>​
		</el-col>
		<el-col :span="8">
			<h1>制作</h1>
			<h3>指导老师：刘学顺</h3>
			<h3>制作团队：莫浙安</h3>
		</el-col>
	</el-row>
	</div>
	
	</div>
</template>

<script>
export default {
	data(){
		return{}
	},
	computed:{
		routePath:function(){
		  return this.$route.path
		},
		textColorYang:function(){
			return this.routePath!="/xinJie";
		},
		textColorYin:function(){
			return this.routePath=="/xinJie";
		}
	},
	methods:{
		clickedEvent:function(){
			console.log("百")
			console.log(this.$route.path)
		}
	}
}
</script>

<style scoped>
	
	.textColorYin{
		color:#000000;
	}
	.textColorYang{
		color:#FFFFFF;
	}
/* 	h1{
		font-size: "40px";
	}
	h3{
		font-size: "50px";
	} */
	
	.fourthBlock{
		position:relative;
		height:auto;
		width:100%;
		/* margin-right:-10px; */
		right:0px;
		left:0px;
		margin-bottom:-100px;
		bottom:-10px;
		/* background-color:#99A9BF; */
		font-size:20px;
		
		text-align:center;
		/* text-shadow: 5px 5px 5px #000000; */
	}
</style>
