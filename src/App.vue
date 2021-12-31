<template>
	
	
<div>
<!-- 	<div v-show="true" style="position:fixed;width:100%;height:300px;
	background-color:#0000FF; z-index:99999"></div> -->
	
	<el-container :style="{height:pageHeight}" style="margin-left=-20px;">
	
	  
	  <el-header height="100px" class="el-menu-demo"
	  style="background-color: rgb(238, 241, 246); text-align:center;
		margin-top:-10px;z-index:1000;">
		<el-row style="margin-top:20px;position:relative;">
			<el-col :span="3">
				<div class="navdiv">
				<a href="https://asia.ubc.ca/" target="_blank">
					<img style="margin-top:-15px;"
					  class="taiji_tu"
					  href="https://asia.ubc.ca/"
									src="./assets/太极_无背景.png" 
									height="90" ></img>		
				</a>
				</div>
			</el-col>
			<el-col :span="10" style="margin-top:-10px;">
				<el-menu router class="navdiv" @select="handleSelect">
					<el-menu-item  index="/">
						<p>2021冬季中文491作品展示</p>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="4" style="margin-top:-10px;">			
					<el-menu router class="navdiv">
						<el-menu-item index="/langSong">
							<p>古文朗诵</p>
						</el-menu-item>
					</el-menu>
				</el-col>
			<el-col :span="4" style="margin-top:-10px;">
				<el-menu router class="navdiv">
					<el-menu-item  index="xinJie">
						<p>古文新解</p>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="3">	 
			<div class="navdiv">
					<a>
				<img class="long"
						style="margin-top:-15px;"
						src="./assets/Long.png" 
						height="90" ></img>
						</a>
						</div>
			</el-col>
		</el-row>

	  </el-header>
	  
	  <div style="margin-left:-8px;height:100%;margin-top:-100px;" ref="routerViewBody">
	      	 
	 <router-view class="child-view"></router-view>
	 
	 
	 <div style="height:10px"></div>
	 <Foot></Foot>

	  </div>

	 
	<!--  <el-footer >
	  	<Foot></Foot>
	  </el-footer> -->
	  
	</el-container>
	
</div>

	
	

</template>

<script scoped> 
	 
import Head from "./components/Head.vue"
import Foot from "./components/Foot.vue"

export default {
	components:{
		Head,
		Foot
	},
	data(){
		const item = {
		        date: '2016-05-02',
		        name: '王小虎',
		        address: '上海市普陀区金沙江路 1518 弄'
		      };
	  return {
		  activeIndex: "1",
		  tableData: Array(20).fill(item),
	  }
	},
	computed:{
		pageHeight:function(){
			
			return window.innerHeight-20 + "px";
		}
	},
	methods: {
		handleSelect(){
			this.$nextTick(() => {
				console.log(this.$refs.routerViewBody)
				this.$refs.routerViewBody.scrollTop = 0;
			})
		},
		startHacking () {
		  this.$notify({
			title: 'It works!',
			type: 'success',
			message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
			duration: 5000
		  })
		},
		   clickedEvent(){
			   console.log("按了")
		   }
		}
}
</script>

<style >
	#app {
		/* font-family: Helvetica, sans-serif; */
		text-align: center;
		margin-left:-10px;
		margin-top:-10px;
		text-shadow: 2px 2px #ff0000;
	}
	

	.el-col{
		/* height: 200px; */
	}
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
	
	
	.navdiv{
		background-color: rgb(238, 241, 246);
	}
	
	.el-menu-demo{
		/* position:relative; */
		/* left:100%; */
		opacity: 0.8;
		/* left:40%; */
		/* text-align:center; */
	}
	
	.el-menu-item{
		height:86px;
		line-height: 86px;
		/* color:red; */
		font-size:38px;
		/* margin-left:40px; */
		margin-top:-40px;
		font-family:"汉仪行楷";
		background-color:rgba(0,0,0,0);
		/* opacity:0.8; */
		/* left:-30px; */
	}

@import './font/font.css'

</style>
