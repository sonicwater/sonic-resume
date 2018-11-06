<template>
    <transition name="fade">
        <el-row>
            <el-col :span="4">
                &nbsp;
            </el-col>
            <el-col :span="16">
                
                <div class="home-intro">

                    <div class="part-1 clearfix">
                        <div class="user-photo">
                            <img src="https://avatars2.githubusercontent.com/u/4988532?s=460&v=4" alt="sonic" />
                        </div>
                        
                        <div class="user-info">
                            <h2 class="sub-title">{{title1}}</h2>

                            <dl class="info">
                                <dd v-for="item in info">
                                    <i class="key">{{item.key}}</i> 
                                    <p v-html="item.value">{{item.value}}</p>
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <div class="part-2">
                        <h2 class="sub-title">{{title2}}</h2>
                        <div class="part-2-content clearfix">
                            <div class="part-2-photo">
                                <img src="https://raw.githubusercontent.com/sonicwater/sonic-resume/master/src/static/images/WechatIMG16.jpg" width="100%" alt="work" />
                            </div>
                            <div class="part-2-dec">
                                <dl>
                                    <dt>介绍</dt>
                                    <dd>{{self_intro}}</dd>
                                    <dt>自评</dt>
                                    <dd>{{self_evaluate}}</dd>
                                </dl>

                            </div>
                        </div>
                        
                    </div>

                </div>
                
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
                title1 : "基本信息",
                title2 : "自我介绍与评价",
                info : [
                    {
                        key : "姓名",
                        value : "张萌"
                    },
                    {
                        key : "姓别",
                        value : "男"
                    },
                    {
                        key : "生日",
                        value : "1982-11-05"
                    },
                    {
                        key : "籍贯",
                        value : "北京"
                    },
                    {
                        key : "邮箱",
                        value : "<a href='mailto:sonicwater@126.com'>sonicwater@126.com</a>"
                    },
                    {
                        key : "手机",
                        value : "18600586846"
                    },
                    {
                        key : "博客",
                        value : "<a target='_blank' href='https://sonicwater.github.io/'>https://sonicwater.github.io/</a>"
                    },

                    {
                        key : "csdn",
                        value : "<a target='_blank' href='https://blog.csdn.net/sonicwater'>https://blog.csdn.net/sonicwater</a>"
                    },
                    {
                        key : "github",
                        value : "<a target='_blank' href='https://github.com/sonicwater'>https://github.com/sonicwater</a>"
                    }
                    
                ],
                self_intro : "本人姓名张萌，北京人。从事前端开发多年，做过几个百万级大型项目和很多中小型响应式项目。热爱研究新技术，写过一些后段语言，追求业内最新的技术栈，努力向全栈技术方向前进。",
                self_evaluate : "本人思想端正、积极向上、适应力强，有一定管理、组织能力。工作中能吃苦肯钻研，能承受较强工作压力，注重长期稳定的发展机会、谈判及沟通协调能力强。强烈的工作责任心及优秀的问题分析与处理能力，强烈的团队协作意识、结果导向及成本控制意识强，并且从事的每项工作都能很好的完成。"
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

    .home-intro{
        margin-top: 40px;
        .user-photo{text-align: center;float: right;}
        .user-photo{margin-top: 3rem;}
        .user-info{float: left;}
        h2.sub-title {font-weight: 100;color: #fff;font-size: 32px; -moz-animation-delay: 1s;-webkit-animation-delay: 1s;animation-delay: 1s;}
        .part-2{margin-top: 3rem;}
        .part-2-content{margin-top: 2rem;}
        .part-2-photo,.part-2-dec{float: left;width: 50%;}
        .part-2-dec{
            dl{padding:0 2rem;}
            dt{color:#5c8; line-height:3rem;}
            dd{text-indent: 2em;}
        }
        @media screen and (max-width: 992px){
            .user-photo,.user-info{float: none;}
            .user-photo{
                img{width: 50%;}
            }
            .part-2-photo,.part-2-dec{float: none;width: 100%;}
            .user-photo{margin-top: 0;}
            h2.sub-title { text-align: center;margin-top: 1rem;}
            .part-2-dec{
                dl{padding: 0;}
            }
        }
    }

    


    .info{
        margin-top: 1rem;
        dt{font-size: 1.5rem;font-weight: normal;}
        dd{
            margin-top: .5rem;position: relative;padding-left: 4rem;word-wrap:break-word;
            i{color:#5c8; position: absolute;left: 0px;top: 0px; width: 3rem;text-align: right;}
        }
    }

	
    
</style>