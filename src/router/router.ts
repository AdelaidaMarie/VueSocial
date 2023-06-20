import {createRouter, createWebHistory} from 'vue-router'
const tok = sessionStorage.getItem('tok')

export default createRouter({
    history: createWebHistory(),
    routes: [
    { 
        path: '/form',
        name: 'form',
        component: () => import(/* webpackChunkName: "form" */ '../views/FormView.vue')
    },
    {
        path: '/',
        name: 'auth',
        component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue')
    },
    {
        
 
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        children: 
        [
            { path: '', name: 'Posts', component: () => import(/* webpackChunkName: "Posts" */ '../views/Posts.vue'),

            },
        {path: '', name : 'Events', component: () => import(/* webpackChunkName: "Events" */ '../views/Events.vue')
    },
    { 
        path: '/Crear', name: 'Crear', component: () => import(/* webpackChunkName: "Crear" */ '../views/Crear.vue'),
    },
    { 
        path: '/CrearEv', name: 'CrearEv', component: () => import(/* webpackChunkName: "CrearEv" */ '../views/CrearEv.vue'),
    }
    ],
    
  },

    {
        path: '/forgot',
        name: 'forgot',
        component: () => import(/* webpackChunkName: "forgot" */ '../views/Forgot.vue')
    }
    
],
})
