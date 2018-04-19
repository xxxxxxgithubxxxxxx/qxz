import Vue from 'vue'
import Router from 'vue-router'
function include(path) {
return () => import('@/components/' + path)
}
function ren(path) {
return () => import('@/components/new/' + path)
}
Vue.use(Router)



export default new Router({
	mode:'history',
  routes: [
    {
    	path:'/home',
    	name:'HelloXqz',
    	component: include('HelloXqz'),
    	mete:{
    		title:'行者App,'
    	}
    },
    {
    	path:'/lushu',
    	name:'lushu',
    	component: include('lushu'),
    	mete:{
    		title:'行者,'
    	}
    },
    {
    	path:'/xzb',
    	name:'xzb',
    	component: include('xzb'),
    	mete:{
    		title:'行者帮,'
    	}
    },
    {
    	path:'/competitions',
    	name:'competitions',
    	component: include('competitions'),
    	mete:{
    		title:'行者,'
    	}
    },
    {
    	path:'/competitions/*',
    	component: include('competitions_details'),
    	mete:{
    		title:'行者,'
    	}
    },
    {
    	path:'/news',
    	name:'news',
    	component: include('news'),
    	mete:{
    		title:'新闻,'
    	},

    },
    {
    	path:'/detail',
    	name:'dateil',
    	component: ren('news-detail'),
    	mete:{
    		title:'新闻,'
    	},

    },
    {
    	path:'/help',
    	name:'help',
    	component: include('help'),
    	mete:{
    		title:'帮助,'
    	}
    },
    
    {
    	path:'/contact',
    	name:'contact',
    	component: include('contact'),
    	mete:{
    		title:'联系我们'
    	}
    },
//  {
//  	path:'/detail',
//		component: ren('news-detail'),
//  },
    {
    	path:'/feng',
    	name:'feng',
    	component: include('feng'),
    	mete:{
    		title:'行者,'
    	}
    },
    {
    	path:'/user',
    	component: include('user'),
    	children:[
    		{
    			path:'login',
    			component: ren('login'),
    			
    		},
    		{
    			path:'register',
    			component: ren('register'),
    		},
    	]
    },
    {   
      path:'*',
      redirect:"/home"   //从定向
    }
  ]
})
