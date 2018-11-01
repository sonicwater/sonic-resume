import Main from './components/Main.vue';
import Home from './components/pages/home.vue';
import Skill from './components/pages/skill.vue';
import Work from './components/pages/work.vue';
import Project from './components/pages/project.vue';
import Edu from './components/pages/edu.vue';

export default{
    //mode:'history',
    routes:[
	    {
            path:'/', 
            component:Main,
            children:[
                {path:'/', component:Home},
                {path:'/skill', component:Skill},
                {path:'/work', component:Work},
                {path:'/project', component:Project},
                {path:'/edu', component:Edu}
            ]
        },
        {path:'*', redirect:'/'}
    ]
}