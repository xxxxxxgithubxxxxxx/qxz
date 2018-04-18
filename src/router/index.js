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
    	path:'/news',
    	name:'news',
    	component: include('news'),
    	mete:{
    		title:'新闻,'
    	},
    	children:[
    		{
    			path:'all',
		    	component: ren('all'),
    		},
    		{
    			path:'cp',
		    	component: ren('cp'),
    		},
    		{
    			path:'rw',
		    	component: ren('rw'),
    		},
    		{
    			path:'ss',
		    	component: ren('ss'),
    		},
    		{
    			path:'xw',
		    	component: ren('xw'),
    		},
    		{
    			path:'zs',
		    	component: ren('zs'),
    		},
    	]
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
