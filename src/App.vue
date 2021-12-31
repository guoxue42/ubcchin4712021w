<template>
	
	
<div>
	<div v-show="true" style="position:absolute;width:100%;
	background-color: rgb(238, 241, 246); z-index:0;
	margin-left:-10px; margin-top:-10px;"
	
	:style="{height:headerHeight}"
	></div>
	
	
	
	<el-container :style="{height:pageHeight}" >
	
	  
	  <el-header  class="el-menu-demo"
	  style="padding-top:10px; background-color: rgb(238, 241, 246); 
	  text-align:center;
		margin-top:-10px;z-index:1000;"
			
			:style="{height:headerHeight}"
		
		>
		<el-row style="margin-top:20px;position:relative;">
			<el-col :span="3">
				<div class="navdiv">
				<a href="https://asia.ubc.ca/" target="_blank">
					<img style="margin-top:-15px;"
					
					  class="taiji_tu"
					  href="https://asia.ubc.ca/"
					  :style="{height:imageHeight}"
									src="./assets/太极_无背景.png" 
									 ></img>		
				</a>
				</div>
			</el-col>
			<el-col :span="10" style="margin-top:-10px;">
				<el-menu router class="navdiv" @select="handleSelect">
					<el-menu-item  
					
						:style="{
							'font-size':headerFontSize,
							'margin-top':headerFontMarginTop,
							'line-height': header10Height,
							'height':header10Height
						}"
					
						index="/">
						<p>2021冬季中文491作品展示</p>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="4" style="margin-top:-10px;">			
					<el-menu router class="navdiv">
						<el-menu-item 
								
								:style="{
									'font-size':headerFontSize,
									'margin-top':headerFontMarginTop,
									'line-height': header10Height,
									'height':header10Height
								}"
								
							index="/langSong">
							<p>古文朗诵</p>
						</el-menu-item>
					</el-menu>
				</el-col>
			<el-col :span="4" style="margin-top:-10px;">
				<el-menu router class="navdiv">
					<el-menu-item  
					
					:style="{
						'font-size':headerFontSize,
						'margin-top':headerFontMarginTop,
						'line-height': header10Height,
						'height':header10Height
					}"
					
						index="xinJie">
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
						:style="{height:imageHeight}"
						 ></img>
						</a>
						</div>
			</el-col>
		</el-row>

	  </el-header>
	  
	  <div style="margin-left:-8px;height:100%;" ref="routerViewBody">
	      	     <transition name="transitionRouter" mode="out-in">
	      	       <router-view/>
	      	     </transition>
	 
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
		header10Height:function(){
			return 90*window.innerHeight/540 + "px"
		},
		imageHeight:function(){
			return 78*window.innerHeight/540 + "px"
		},
		headerHeight:function(){
			return 100*window.innerHeight/540 + "px"
		},
		headerFontSize:function(){
			return 28*window.innerHeight/540 + "px"
		},
		headerFontMarginTop:function(){
			return -40*window.innerHeight/540 + "px"
		},
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
	
	.transitionRouter-enter-active, .transitionRouter-leave-active {
	    transition: all 1s;
	} .transitionRouter-enter, .transitionRouter-leave{
	    transform: translate3d(100%, 0, 0);
	}
	
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
		/* margin-top:-100px; */
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
		/* line-height: 86px; */
		/* font-size:38px; */
		font-family:"汉仪行楷";
		background-color:rgba(0,0,0,0);
		/* opacity:0.8; */
		/* left:-30px; */
	}

@import './font/font.css'

</style>
