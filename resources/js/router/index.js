import { createWebHistory, createRouter } from "vue-router";



import { useStore } from "../store/auth"

import Store from "../pages/Store.vue"
import Report from "../pages/Report.vue"
import Pos from "../pages/Pos.vue"
import Transection from "../pages/Transection.vue"
import Login from "../pages/Login.vue"
import Register from "../pages/Register.vue"
import NotPage from '../pages/NoPage.vue'

const authMiddleware = (to, from, next) => {
    const token = localStorage.getItem('web_token')
    // console.log(token)
    if (!token) {
        next({
            path:"/login",
            replace: true
        })
    } else {
      next()
    }
  }

export const routes = [
    { 
        path: '/', 
        redirect: '/store' 
    },
    {
        name: 'store',
        path:'/store',
        component: Store,
        meta: {
            middleware: [authMiddleware]
          }
    },
    {
        name: 'pos',
        path:'/pos',
        component: Pos,
        meta: {
            middleware: [authMiddleware]
          }
    },
    {
        name: 'transection',
        path:'/transection',
        component: Transection,
        meta: {
            middleware: [authMiddleware]
          }
    },
    {
        name: 'report',
        path:'/report',
        component: Report,
        meta: {
            middleware: [authMiddleware]
          }
    },
    {
        name: 'login',
        path:'/login',
        component: Login,
     
        
    },
    {
        name: 'register',
        path:'/register',
        component: Register,
    },

    {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotPage,
    meta: {
        middleware: [authMiddleware]
      }
  },
];




const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(){
        window.scrollTo(0,0);
    }
});

router.beforeEach((to, from, next) => {

    const token = localStorage.getItem('web_token')
    const user = localStorage.getItem('user')
    const store = useStore()
    store.set_token(token,user)

if (to.meta.middleware) {
    to.meta.middleware.forEach(middleware => middleware(to, from, next))
  } else {

    if(to.path=='/login' || to.path=='/'){
        // const token = localStorage.getItem('web_token')
        if(token){
          next({
                    path:"/store",
                    replace: true
                })
        } else {
            next()
        }
    } 
     else {
        next()
    }
    
   
  }
})

export default router;