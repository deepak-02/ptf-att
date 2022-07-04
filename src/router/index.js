import Vue from 'vue'
import VueRouter from 'vue-router'

//User
import UserAttend from '../views/UserAttend.vue';

//Admin

import Admin from '../views/Admin.vue';
import AdminAbout from '../views/Admin/AdminAbout';
import AdminAttend from '../views/AdminAttend.vue';
import AdminEdit from '../views/AdminEdit.vue';
import AdminHome from '../views/AdminHome.vue';
import AdminProfile from '../views/AdminProfile.vue';
import ForgetPassword from '../views/ForgetPassword.vue';
import AdminRegister from '../views/AdminRegister.vue'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    redirect: 'Admin',
   
  },
  {
    path: '/userattend',
    name: 'userattend',
    component: UserAttend
  },

  //Admin
  {
    path: '/adminhome',
    name: 'adminhome',
    component: AdminHome
  },
  {
    path: '/adminprofile',
    name: 'adminprofile',
    component: AdminProfile
  },
  {
    path: '/adminabout',
    name: 'adminabout',
    component: AdminAbout
  },
  {
    path: '/adminattend',
    name: 'adminattend',
    component: AdminAttend
  },
  {
    path: '/adminedit',
    name: 'adminedit',
    component: AdminEdit
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/forgetpassword',
    name: 'forgetpassword',
    component: ForgetPassword
  },
  {
    path: '/adminregister',
    name: 'adminregister',
    component: AdminRegister
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
