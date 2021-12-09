<template>
	
	<div>
		

	
	<div  class="el-menu-demo">
		
	<el-menu :default-active="activeIndex"
	   mode="horizontal" @select="handleSelect"
	    router
		:background-color="backgroundColor"
		class="el-menu-main"
		>
	  <el-menu-item index="0" class="taiji">
		  <a href="https://asia.ubc.ca/" target="_blank">
		  
		  <img href="https://asia.ubc.ca/"
		  	src="../assets/ubc_log.webp.jpg" 
		  	height="60" ></img>
			
			</a>
	  </el-menu-item>
	  <el-menu-item index="1">首页</el-menu-item>
	  <el-submenu index="2">
	    <template slot="title">作品锦集</template>
	    <el-menu-item index="2-1">诵</el-menu-item>
	    <el-menu-item index="2-2">文</el-menu-item>
	    <el-menu-item index="2-3">画</el-menu-item>
	    <el-submenu index="2-4">
	      <template slot="title">书</template>
	      <el-menu-item index="2-4-1">儒家</el-menu-item>
	      <el-menu-item index="2-4-2">道家</el-menu-item>
	      <el-menu-item index="2-4-3">墨家</el-menu-item>
	    </el-submenu>
	  </el-submenu>
	  <el-submenu index="3">
		<template slot="title">夏商周</template>
		<el-menu-item index="3-1">利簋銘文</el-menu-item>
		<el-menu-item index="3-2">尚书</el-menu-item>
	  </el-submenu>
	  <el-submenu index="4">
		<template slot="title">春秋</template>
		<el-menu-item index="4-1">孔子</el-menu-item>
		<el-menu-item index="4-2">老子</el-menu-item>
		<el-menu-item index="4-3">左传</el-menu-item>
	  </el-submenu>
	  <el-submenu index="5">
	  		<template slot="title">战国</template>
	  		<el-menu-item index="5-1">战国策</el-menu-item>
	  		<el-menu-item index="5-2">孟子</el-menu-item>
			<el-menu-item index="5-3">荀子</el-menu-item>
			<el-menu-item index="5-4">庄子</el-menu-item>
			<el-menu-item index="5-5">墨子</el-menu-item>
			<el-menu-item index="5-6">孙子兵法</el-menu-item>
	  </el-submenu>
	  <el-submenu index="6">
	  		<template slot="title">秦汉</template>
	  		<el-menu-item index="6-1">史记</el-menu-item>
	  		<el-menu-item index="6-2">汉书</el-menu-item>
			<el-menu-item index="6-3">答謝中書書</el-menu-item>
			<el-menu-item index="6-4">與顧章書</el-menu-item>
	  </el-submenu>
	  <el-submenu index="7">
	  		<template slot="title">古代汉语语法</template>
	  		<el-menu-item index="7-1">工具书</el-menu-item>
	  		<el-menu-item index="7-2">汉字</el-menu-item>
			<el-menu-item index="7-3">词汇</el-menu-item>
			<el-menu-item index="7-4">异体字，古今字</el-menu-item>
			<el-menu-item index="7-5">异体字，古今字</el-menu-item>
			<el-menu-item index="7-6">判断句子</el-menu-item>
			<el-submenu index="7-7">
					<template slot="title">句子</template>
					<el-menu-item index="7-7-1">判断句</el-menu-item>
					<el-menu-item index="7-7-2">被动句</el-menu-item>
					<el-menu-item index="7-7-3">疑问句</el-menu-item>
					<el-menu-item index="7-7-4">否定句</el-menu-item>
			</el-submenu>
			<el-menu-item index="7-8">虚词</el-menu-item>
	  </el-submenu>
	  <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
	  <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
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
		  }
		},
		methods: {
			handleSelect(){
				this.$notify({
							title: '诺！',
							type: 'success',
							// dangerouslyUseHTMLString: true,
							message: '正为君获取新的页面!',
							duration: 2000
				})
			},
		}
	}
</script>

<style scoped>
	el-menu-item{
		/* opacity: 0.2; */
	}
	.el-menu-demo{
		position:relative;
		/* left:100%; */
		opacity: 0.8;
		/* left:40%; */
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
