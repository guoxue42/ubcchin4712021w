<template>
  <div id="app" @click="clickedEvent">


  <Head style="position:fixed;z-index: 99999;"></Head>
  
	<!--      <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link> -->
	<!-- <div style="top:100px;"> -->
		<transition name="fade">
			
		<router-view></router-view>
		
		</transition>
	<!-- </div> -->
   <!-- <img src="./assets/龙凤.png"></img> -->

      <!-- <el-button @click="startHacking">Start</el-button> -->
      
	  <!-- style="position:fixed; bottom:0;" -->
	  <!-- <div style="height:200px"></div> -->
	  <Foot></Foot>
	  
  </div>
</template>

<script> 
	 
import Head from "./components/Head.vue"
import Foot from "./components/Foot.vue"

export default {
	components:{
		Head,
		Foot
	},
	data(){
	  return {
		  activeIndex: "1",
		  
	  }
	},
	methods: {
		handleSelect(){
		  
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
		font-family: Helvetica, sans-serif;
		text-align: center;
		margin-left:-10px;
		margin-top:-10px;
	}
@import './font/font.css'
</style>
