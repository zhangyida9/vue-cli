//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

//1.通过vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
    {
        path: '/',  //默认路径
        redirect: '/Home'
    },

    {
        path: '/Home',
        component: Home
    },

    {
        path: '/About',
        component: About
    },

    {
        path: '/User/:userId',
        component: User
    }
]

const router = new VueRouter({
    //配置路由和组件之间的应用关系
    routes,
    mode: 'history'
})

//3.将router对象传入到vue实例中
export default router