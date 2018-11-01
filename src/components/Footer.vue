<template>
	<footer>
		<el-row>
	  		<el-col :span="4">
				&nbsp;
	  		</el-col>
	  		<el-col :span="16" class="copyright">
	  			<p> Copyright © 2018 <a href="#">Sonic</a></p>
	  		</el-col>
	  		<el-col :span="4" id="el-menu-login">
				&nbsp;
	  		</el-col>
		</el-row>
	</footer>
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
	.copyright { margin-top: 30px; margin-bottom: 20px;border-top: 2px solid #46494f;text-align: center;padding: 20px 0;}
	.copyright p {margin-bottom: 10px;font-size: 12px;}
</style>
