<template>
	<header>
		<el-row class="NavHeaderBar">
	  		<el-col :span="4">
				&nbsp;
	  		</el-col>
	  		<el-col :span="16">
	  			<div class="header-wrapper">
					<el-col :span="8">
						<div class="site-branding">
							<a href="javascript:;"><h1>Raleway</h1></a>
						</div>
			  		</el-col>
			  		<el-col :span="16">
			  			<nav id="nav" class="main-navigation">
							<ul class="main-menu">
								<li><a class="show-1 homebutton active" href="#">Home</a></li>
								<li><a class="show-2 aboutbutton" href="#">About Us</a></li>
								<li><a class="show-3 projectbutton" href="#">Projects</a></li>
								<li><a class="show-4 blogbutton" href="#">Blog Entries</a></li>
								<li><a class="show-5 contactbutton" href="#">Contact</a></li>
							</ul>
						</nav>
			  		</el-col>
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

	        }
	    },
	    components:{
	        
	    },
	    methods: {

	    }
	}
</script>
<style scoped>
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
	.header-wrapper {border-bottom: 2px solid #46494f;padding: 60px 0;position: relative;}
	.site-branding h1 {font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: 30px;font-weight: 700;color: #fff;text-transform: uppercase;}
	nav.main-navigation {text-align: right;margin-top: 10px;}
	ul.main-menu li {display: inline-block;margin-left: 10px;}
	ul.main-menu li a {padding: 10px 15px;text-transform: uppercase;font-size: 13px;}
	ul.main-menu li a.active {background: #4e91c9;color: #fff;}

	@media screen and (max-width: 992px){
		nav.main-navigation {display: none;}
	}


</style>
