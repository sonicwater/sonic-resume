<template>
    <transition name="fade">
        <el-row>
            <el-col :span="4">
                &nbsp;
            </el-col>
            <el-col :span="16">
                <dl class="project">
                    <h2 class="sub-title">{{title1}}</h2>
                    <dd v-for="item in project">
                        <i class="el-icon-arrow-right"></i>
                        <p class="proj-title">{{item.name}} {{item.date}}</p>
                        <p class="proj-desc">{{item.desc}}</p>
                        <p class="proj-link">上线地址：<span v-html="item.link">{{item.link}}</span></p>
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
                title1 : "项目经验",
                project : [
                    {
                        name : "瑰柏翠",
                        date : "2018.3 - 至今",
                        desc : "此项目是电商商城，三百万级大项目。接口由电商后台php提供，java做cms内容管理和应用内链接跳转，前端用jQuery+html5做响应式。此项目分香港英文版和香港繁体中文版，前端业务逻辑较重，接口调用反复优化。涉及部门众多，需要有很强的沟通协作能力及技术能力。",
                        link : "<a target='_blank' href='https://www.crabtree-evelyn.com.hk/'>https://www.crabtree-evelyn.com.hk/</a>"
                    },
                    {
                        name : "永昌乐地",
                        date : "2018.5",
                        desc : "永昌乐地是企业产品宣传项目，整站采用响应式布局，其中包括复杂动效设计实现。",
                        link : "<a target='_blank' href='http://yongchang.xinb.cebest.com/'>http://yongchang.xinb.cebest.com/</a>"
                    },
                    {
                        name : "劳资医生官网&后台",
                        date : "2017.12 - 2018.5",
                        desc : "劳资医生项目是助力百万家企业解决劳动关系问题的企业级网站。本项目包括PC端和移动端，PC端采用jQuery实现嵌套后台java数据，移动端是用vue框架前后端分离。后台管理系统也是用vue框架。",
                        link : "PC端 ：<a target='_blank' href='http://www.hrmore.com'>http://www.hrmore.com</a><br />移动端 ：<a target='_blank' href='http://mobile.hrmore.com/'>http://mobile.hrmore.com/</a>"
                    },
                    {
                        name : "ERC官网&后台",
                        date : "2017.9-2017-11",
                        desc : "一个产品展示类的响应式网站。前端用jQuery+css3，后段使用node ejs模版嵌套数据。",
                        link : "官网 ：<a target='_blank' href='http://farmout.btbtd.com/ers_public/'>http://farmout.btbtd.com/ers_public/</a>"
                    },
                    {
                        name : "后台管理系统",
                        date : "2017.5-2017-7",
                        desc : "某个后台管理系统，前端使用vue+element-ui，展示数据使用Echart图表。",
                        link : "<a target='_blank' href='https://sonicwater.github.io/vue-element-ui/'>https://sonicwater.github.io/vue-element-ui/</a>"
                    },
                    {
                        name : "实验项目：博客前台应用",
                        date : "2018.1",
                        desc : "此项目是自己练手项目，使用node express + swig模版 + mongodb。",
                        link : "<a target='_blank' href='https://github.com/sonicwater/node_learn/tree/master/node_blog'>github地址</a>"
                    },
                    {
                        name : "实验项目：java微服务",
                        date : "2018.10",
                        desc : "此项目是自己练手项目，使用java maven构建 Spring-boot restful风格的微服务，数据库是mysql。",
                        link : "<a target='_blank' href='https://github.com/sonicwater/spring-boot-demo-2'>github地址</a>"
                    },
                    {
                        name : "实验项目：小程序",
                        date : "2018.9",
                        desc : "此项目是自己练手项目，微信小程序。",
                        link : "<a target='_blank' href='https://github.com/sonicwater/sonic-wx-miniprogram'>github地址</a>"
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

	.project{
        margin-top: 1rem;
        h2.sub-title {font-weight: 100;color: #fff;font-size: 32px; -moz-animation-delay: 1s;-webkit-animation-delay: 1s;animation-delay: 1s;}
        dt{font-size: 1.5rem;font-weight: normal;}
        dd{
            margin: .5rem 0 2rem;position: relative;padding-left: 2rem;word-wrap:break-word;
            i{color:#5c8; position: absolute;left: 3px;top: 3px; text-align: right;}
            .proj-title{font-weight: bold; font-size: 1.2rem; color:#fff;}
            .proj-desc{margin:.5rem;}
        }
        @media screen and (max-width: 992px){
            h2.sub-title { text-align: center;margin-top: 1rem;}
        }
    }
    
</style>