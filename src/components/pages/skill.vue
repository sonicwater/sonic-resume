<template>
    <transition name="fade">
        <el-row>
            <el-col :span="4">
                &nbsp;
            </el-col>
            <el-col :span="16">
                skill
            </el-col>
            <el-col :span="4">
                &nbsp;
            </el-col>
        </el-row>
    </transition>
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

	
    
</style>