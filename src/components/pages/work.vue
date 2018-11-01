<template>
    <transition name="fade">
        <el-row>
            <el-col :span="4">
                &nbsp;
            </el-col>
            <el-col :span="16">
                
                <dl class="work">
                    <h2 class="sub-title">{{title1}}</h2>
                    <dd v-for="item in work">
                        <i class="el-icon-arrow-right"></i>
                        <p class="work-title">{{item.name}} {{item.date}}</p>
                        <p class="work-desc" v-html="item.desc">{{item.desc}}</p>
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
                title1 : "工作经历",
                work : [
                    {
                        name : "中企动力",
                        date : "2018年1月 - 至今",
                        desc : "负责大客户事业部-设计制作部前端开发工作。"
                    },
                    {
                        name : "多高信息服务有限责任公司",
                        date : "2016.6-2017-12",
                        desc : "多高是一家P2P金融互联网公司，负责公司APP及pc端前端开发工作。"
                    },
                    {
                        name : "奥维云网大数据（AVC）",
                        date : "2014.8-2016.5",
                        desc : "奥维云网是一家专注家电行业大数据系统开发的公司，我参与开发PC端“万象数据”项目。包括“乱价”、“负评”等子项目，前端选型AngularJS，项目是单页应用，使用虚拟机在Linux系统下开发，使用前端自动化工具gulp+bower。需求使用Echarts实现各种数据可视化效果。我担任前端组长，带领4个人的团队进行项目开发。"
                    },
                    {
                        name : "乐语集团",
                        date : "2013.4-2014.8",
                        desc : "乐语集团当时的项目包括PC端“乐语云平台”、“预算系统”、“妙商城”等，移动端项目包括微信端“妙商城”及一些小项目。我制作上面提到的项目的原型页面制作，并担任前端负责人，带领两个前端开发人员共同开发。"
                    },
                    {
                        name : "炎黄新星",
                        date : "2011.11-2013.3",
                        desc : "公司服务的客户包括“中国移动”和“中国联通”，我所在的策划设计部门负责联通项目，PC端包括网上“营业厅”、“沃支付”等，移动端包括“手厅简版”、“手厅彩色版”、“手厅移动版”、“支付项目”等。我负责以上所有项目原型页制作。"
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

	.work{
        margin-top: 1rem;
        h2.sub-title {font-weight: 100;color: #fff;font-size: 32px; -moz-animation-delay: 1s;-webkit-animation-delay: 1s;animation-delay: 1s;}
        dt{font-size: 1.5rem;font-weight: normal;}
        dd{
            margin:.5rem 0 1rem;position: relative;padding-left: 2rem;word-wrap:break-word;
            i{color:#3fc; position: absolute;left: 3px;top: 3px; text-align: right;}
            .work-title{font-weight: bold; font-size: 1.2rem; color:#fff;}
            .work-desc{margin:.5rem;}
        }
        @media screen and (max-width: 992px){
            h2.sub-title { text-align: center;margin-top: 1rem;}
        }
    }
    
</style>