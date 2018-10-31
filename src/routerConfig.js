import Main from './components/Main.vue';
import Home from './components/pages/home.vue';

export default{
    //mode:'history',
    routes:[
	    {
            path:'/', 
            component:Main,
            children:[
                {path:'/', component:Home}
            ]
        },
    	
        
        
        
        {path:'*', redirect:'/'}
    ]
}