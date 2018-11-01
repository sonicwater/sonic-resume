<template>
    <div>
        <Header></Header>
        <el-row>
            <el-col :span="24">
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
    	name: 'Main',
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