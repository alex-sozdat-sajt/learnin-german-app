import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Words from '../views/Words.vue'
import Profile from '../views/Profile.vue'
import Logout from '../views/Logout.vue'
import Store from '../store/store'
 
 

Vue.use(VueRouter)

const routes = [
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
   {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }, {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
     {
    path: '/words',
    name: 'Words',
    component: Words
  },
      
      {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: AuthGuard
  },
        {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function AuthGuard(from, to, next) {
  if (Store.getters.ISUSERAUTHENTICATE)
    next()
  else
    next('/signin')
}

export default router
