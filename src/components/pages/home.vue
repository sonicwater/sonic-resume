<template>
    <div>
        <el-row>
            <el-col :span="4">
                &nbsp;
            </el-col>
            <el-col :span="16">
                <div class="home-intro">
                    <h2 class="welcome-title animated fadeInLeft">Introduction</h2>
                </div>
                
            </el-col>
            <el-col :span="4">
                &nbsp;
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default{
        data() {
            return{
                
            }
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scope>

    .home-intro{
        margin-top: 40px;
        h2.welcome-title {font-weight: 100;color: #fff;font-size: 48px;margin-bottom: 30px;-moz-animation-delay: 0.1s;-webkit-animation-delay: 0.1s;animation-delay: 0.1s;}
        @media screen and (max-width: 992px){
            h2.welcome-title {font-size: 32px;text-align: center;}
        }
    }

	
    
</style>