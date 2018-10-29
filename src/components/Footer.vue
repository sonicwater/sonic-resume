<template>
	<footer>
		<el-row>
	  		<el-col :span="6">
				&nbsp;
	  		</el-col>
	  		<el-col :span="12" class="footer">
	  			footer
	  		</el-col>
	  		<el-col :span="6" id="el-menu-login">
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
<style>
	.el-menu--horizontal .el-submenu__title:hover {
    	background-color:#20A0FF;
	}
	.el-menu--horizontal .el-submenu .el-submenu__icon-arrow{
		color:#fff;
	}
</style>
<style scoped>
	footer{    position: fixed; bottom: 0; width: 100%;background: #1D8CE0;}
	.footer{text-align: center;}
</style>
