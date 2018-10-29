<template>
    <div id="app">
        <Header></Header>
        <el-row class="tac">
            <el-col :span="24" class="ContentRight">
                <router-view></router-view>
            </el-col>
        </el-row>
        <Footer></Footer>
    </div>
</template>
<script>
	import Header from './Header.vue';
	import Footer from './Footer.vue';
    export default{
    	name: 'home',
        data() {
            return{
                
            }
        },
        components: {
        	Header,
        	Footer
        },
        mounted() {
        }
    }
</script>
<style scope>
	
</style>