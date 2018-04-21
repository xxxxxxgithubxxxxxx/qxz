import Vue from 'vue'
import Router from 'vue-router'
function include(path) {
return () => import('@/components/' + path)
}
function ren(path) {
return () => import('@/components/new/' + path)
}
function aiguo(path){
return () => import('@/components/aiguo/'+path)
}

Vue.use(Router)


let router = new Router({
	mode:'history',
  routes: [
    {
    	path:'/home',
    	name:'HelloXqz',
    	component: include('HelloXqz'),
    	meta:{
    		title:'行者App,'

    		
    	}
    },
    {
    	path:'/datalist',
    	name:'datalist',
    	component: aiguo('datalist')
    },
    {
    	path:'/lushu',
    	name:'lushu',
    	component: include('lushu'),
    	meta:{
    		title:'行者,'
    	}
    },
    {
    	path:'/xzb',
    	name:'xzb',
    	component: include('xzb'),
    	meta:{
    		title:'行者帮,'
    	}
    },
    {
    	path:'/competitions',
    	name:'competitions',
    	component: include('competitions'),
    	meta:{
    		requiresAuth:true,
    		title:'行者,'
    	}
    },  
    {
    	path:'/competitions_details',
    	name:'competitions_details',
    	component: include('competitions_details'),
    	meta:{
    		requiresAuth:true,
    		title:'行者,'
    	}
    },
    {
    	path:'/news',
    	name:'news',
    	component: include('news'),
    	meta:{
    		title:'新闻,'
    	},

    },
    {
    	path:'/detail',
    	name:'dateil',
    	component: ren('news-detail'),
    	meta:{
    		title:'新闻,'
    	},

    },
    {
    	path:'/help',
    	component: include('help'),
    	meta:{
    		requiresAuth:true,
    	}
    },
    
    {
    	path:'/contact',
    	name:'contact',
    	component: include('contact'),
    	meta:{
    		title:'联系我们'
    	}
    },
    {
    	path:'/feng',
    	name:'feng',
    	component: include('feng'),
    	meta:{
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

router.beforeEach((to, from, next) => {
//获取store里面的token
//let token = store.state.token;
//判断要去的路由有没有requiresAuth
if (to.meta.requiresAuth) {
    if (false) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将刚刚要去的路由path作为参数，方便登录成功后直接跳转到该路由
      });
    }

} else {
    next(); 
}
});
export default router