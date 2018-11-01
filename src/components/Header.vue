<template>
	<header>
		<el-row class="NavHeaderBar">
	  		<el-col :span="4">
				&nbsp;
	  		</el-col>
	  		<el-col :span="16">
	  			<div class="header-wrapper">
	  				<el-row class="show-pc">
	  					<el-col :span="4">
							<div class="site-branding">
								<a href="javascript:;">
									<h1>{{title}}</h1>
								</a>
							</div>
				  		</el-col>
				  		<el-col :span="20">
				  			<nav class="main-navigation">
								<ul class="main-menu">
									<li v-for="text in menuData">
										<router-link :to="{path:text.link}">
					                		{{text.text}}
					                	</router-link>
									</li>
								</ul>
							</nav>
				  		</el-col>
	  				</el-row>
	  				<el-row class="show-mobile">
	  					<el-col :span="20">
							<div class="site-branding">
								<a href="javascript:;">
									<h1>{{title}}</h1>
								</a>
							</div>
				  		</el-col>
				  		<el-col :span="4">
				  			<div class="menu">
								<a :class="{'active':isActive}" @click="toggleMenu" href="javascript:;" class="navicon"></a>
							</div>
				  		</el-col>
				  	</el-row>
	  				<el-row>
						<nav :class="{'active':isActive}" class="main-navigation-mobile menu-responsive hidden-md hidden-lg">
							<ul class="main-menu">
								<li v-for="text in menuData" @click="toggleMenu">
									<router-link :to="{path:text.link}">
					                	{{text.text}}
					                </router-link>
								</li>
							</ul>
						</nav>
					</el-row>
				</div>
	  		</el-col>
	  		<el-col :span="4">
				&nbsp;
	  		</el-col>
		</el-row>
	</header>
</template>
<script>
	export default{
		data () {
	        return {
	        	title : "个人简历",
	        	isActive : false,
	        	menuData : [
	        		{
	        			link : "/",
	        			text : "首页"
	        		}, 
	        		{
	        			link : "/skill",
	        			text : "技术栈"
	        		},
	        		{
	        			link : "/project",
	        			text : "项目经验"
	        		},
	        		{
	        			link : "/edu",
	        			text : "教育经历"
	        		},
	        		{
	        			link : "/contact",
	        			text : "联系我"
	        		}
	        	]
	        }
	    },
	    components:{
	        
	    },
	    methods: {
	    	//点击menu
	    	toggleMenu(){
	    		this.isActive = !this.isActive
	    	}
	    }
	}
</script>
<style lang="scss" scoped>
	
	*:before, *:after {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}

	.grid-content h1{font: 32px/48px "microsoft yahei";margin: 2px;color: #ddd;}
	.el-row {
		&:last-child {  margin-bottom: 0;}
 	}
	.el-col {border-radius: 4px;}
	.bg-purple-dark {background: #99a9bf;}
	.bg-purple {background: #1D8CE0;}
	.bg-purple-light {background: #e5e9f2;}
	.grid-content {padding: 10px 32px;}

	/*tmp*/
	.header-wrapper {border-bottom: 2px solid #46494f;padding: 30px 0;position: relative;}
	.site-branding h1 {font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: 30px;font-weight: 700;color: #fff;text-transform: uppercase;}
	nav.main-navigation {text-align: right;margin-top: 10px;}
	nav.main-navigation-mobile{display: none;}
	ul.main-menu li {
		display: inline-block;margin-left: 10px;
		a {padding: 10px 15px;text-transform: uppercase;font-size: 13px;}
		a.active {background: #4e91c9;color: #fff;}
	}

	.social-w3licon {margin-top: 1em;}
	.menu {
		float: right;
		.navicon {background: transparent;position: relative;height: 30px;width: 30px;display: block;z-index: 9999;-webkit-transition: linear 0.5s all;-moz-transition: linear 0.5s all;-ms-transition: linear 0.5s all;-o-transition: linear 0.5s all;transition: linear 0.5s all;outline: none;margin-top: 6px;}
		.active {-webkit-transition: 0.5s all;-moz-transition: 0.5s all;-moz-transition: 0.5s all;-o-transition: 0.5s all;transition: 0.5s all;}
		.navicon:before,.navicon:after {background: #3cf;-webkit-backface-visibility: hidden;backface-visibility: hidden;content: "";height: 2px;left: 0;-webkit-transition: 0.8s all;-moz-transition: 0.8s all;-o-transition: 0.8s all;-ms-transition: 0.8s all;transition: 0.8s all;width: 30px;}
		.navicon:before {-moz-box-shadow: #3cf 0 10px 0 0;-o-box-shadow: #3cf 0 10px 0 0;-ms-box-shadow: #3cf 0 10px 0 0;-webkit-box-shadow: #3cf 0 10px 0 0;box-shadow: #3cf 0 10px 0 0;position: absolute;top: 0;}
		.active:before {-moz-box-shadow: transparent 0 0 0 0;-ms-box-shadow: transparent 0 0 0 0;-o-box-shadow: transparent 0 0 0 0;-webkit-box-shadow: transparent 0 0 0 0;box-shadow: transparent 0 0 0 0;top: 15px !important;-webkit-transform: rotate(225deg);-ms-transform: rotate(225deg);-moz-transform: rotate(225deg);-o-transform: rotate(225deg);transform: rotate(225deg);}
		.navicon:after {position: absolute;top: 20px;}
		.active:after {top: 15px !important;-webkit-transform: rotate(315deg);-ms-transform: rotate(315deg);-moz-transform: rotate(315deg);-o-transform: rotate(315deg);transform: rotate(315deg);}
	}

	.show-pc{display: block;}
	.show-mobile{display: none;}

	@media screen and (max-width: 992px){
		.show-pc{display: none;}
		.show-mobile{display: block;}
		nav.main-navigation-mobile {margin-top: 0px;text-align: left;height: 0;-webkit-transition: 0.8s all;-moz-transition: 0.8s all;-o-transition: 0.8s all;-ms-transition: 0.8s all;transition: 0.8s all;overflow: hidden;opacity: 0;display: block;}
		nav.main-navigation-mobile.active {margin-top: 20px;text-align: left;height: auto;-webkit-transition: 0.8s all;-moz-transition: 0.8s all;-o-transition: 0.8s all;-ms-transition: 0.8s all;transition: 0.8s all;overflow:auto;opacity: 1;display: block;}
		ul.main-menu {
			background: #26282c;padding: 10px 0;
			li {display: block;margin-left: 0;margin-right: 0;margin-bottom: 10px;margin-top: 10px;}
			li a.active {background: inherit;color: #4e91c9;}
		}
	}


</style>
