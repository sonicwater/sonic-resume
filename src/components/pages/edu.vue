<template>
    <transition name="fade">
        <el-row>
            <el-col :span="4">
                &nbsp;
            </el-col>
            <el-col :span="16">
                <dl class="edu">
                    <h2 class="sub-title">{{title1}}</h2>
                    <dd v-for="item in edu">
                        <i class="el-icon-check"></i> 
                        <p>{{item.name}} {{item.major}} {{item.date}}</p>
                    </dd>
                </dl>
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
                title1 : "教育经历",
                edu : [
                    {
                        name : "北京大学",
                        major : "财务管理",
                        date : "2009.2 —— 2012.1"
                    },
                    {
                        name : "北京联合大学师范学院",
                        major : "电子商务专业",
                        date : "2001.9 —— 2004.7"
                    }
                ]

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

	.edu{
        margin-top: 1rem;
        h2.sub-title {font-weight: 100;color: #fff;font-size: 32px; -moz-animation-delay: 1s;-webkit-animation-delay: 1s;animation-delay: 1s;}
        dt{font-size: 1.5rem;font-weight: normal;}
        dd{
            margin-top: .5rem;position: relative;padding-left: 2rem;word-wrap:break-word;
            i{color:#5c8; position: absolute;left: 3px;top: 3px; text-align: right;}
        }
        @media screen and (max-width: 992px){
            h2.sub-title { text-align: center;margin-top: 1rem;}
        }
    }
    
</style>