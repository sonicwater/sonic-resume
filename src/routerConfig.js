import Main from './components/Main.vue';
import Home from './components/pages/home.vue';
import Skill from './components/pages/skill.vue';

export default{
    //mode:'history',
    routes:[
	    {
            path:'/', 
            component:Main,
            children:[
                {path:'/', component:Home},
                {path:'/skill', component:Skill},
                {path:'/project', component:Skill},
                {path:'/edu', component:Skill},
                {path:'/contact', component:Skill}
            ]
        },
    	
        
        
        
        {path:'*', redirect:'/'}
    ]
}