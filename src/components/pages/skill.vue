<template>
    <transition name="fade">
        <el-row>
            <el-col :span="4">
                &nbsp;
            </el-col>
            <el-col :span="16">
                <dl class="skill">
                    <h2 class="sub-title">{{title1}}</h2>
                    <dd v-for="item in skill">
                        <i class="el-icon-check"></i> 
                        <p v-html="item.value">{{item.value}}</p>
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
                title1 : "get到的技能",
                skill : [
                    {
                        value : "精通XHTML+CSS制作符合W3C标准的页面，同时兼容IE7、IE8、火狐、谷歌等浏览器。"
                    },
                    {
                        value : "熟练使用HTML5+CSS3制作移动端及部分PC端页面的方案，能用JS或CSS3制作动画效果。"
                    },
                    {
                        value : "熟悉ES5、ES6的高级语法，能熟练使用原生javascript。"
                    },
                    {
                        value : "熟练使用Photoshop，Ai等制图软件，有一定设计能力，能快速切图转换静态页。"
                    },
                    {
                        value : "熟练使用Bootstrap 、使用过Foundation、VUE Element-UI、React Antd等UI库。"
                    },
                    {
                        value : "熟练使用vue、react等MVVM框架，做过一些后台管理系统，手机端应用，微信小程序。"
                    },
                    {
                        value : "能使用一些前端自动化工具，包括npm、gulp、bower、webpack等。"
                    },
                    {
                        value : "使用过IIS、Apache、nginx等服务器搭建本地静态项目。"
                    },
                    {
                        value : "熟悉一些后台语言，使用Java Spring Boot框架搭建过restful微服务、使用NodeJS express4、koa2框架开发过后台项目。"
                    },
                    {
                        value : "熟悉git版本控制管理命令，且熟悉一些Linux命令。"
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

	.skill{
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