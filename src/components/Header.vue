<template>
	<header>
		<el-row class="NavHeaderBar">
	  		<el-col :span="6">
				&nbsp;
	  		</el-col>
	  		<el-col :span="12" class="title">
	  			wo de jiajia
	  		</el-col>
	  		<el-col :span="6">
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
<style>
	.el-menu--horizontal .el-submenu__title:hover {
    	background-color:#20A0FF;
	}
	.el-menu--horizontal .el-submenu .el-submenu__icon-arrow{
		color:#fff;
	}
</style>
<style scoped>
	.grid-content h1{
		font: 32px/48px "microsoft yahei";
	    margin: 2px;
	    color: #ddd;
	}
	.NavHeaderBar{
		background: #1D8CE0;
	}
	.el-row {
	    &:last-child {
	      margin-bottom: 0;
	    }
  	}
	.el-col {
		border-radius: 4px;
	}
	.bg-purple-dark {
		background: #99a9bf;
	}
	.bg-purple {
		background: #1D8CE0;
	}
	.bg-purple-light {
		background: #e5e9f2;
	}
	.grid-content {
		padding: 10px 32px;
	}
	.title{color: #fff;text-align: center; font-size: 1.5rem;}
</style>
