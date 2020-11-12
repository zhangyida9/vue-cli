//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')   //路由懒加载
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

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
        component: Home,
        meta: {
            title : '首页'
        },
        children: [
            {
                path: '',
                component: HomeMessage
            },
            {
                path: 'HomeNews',
                component: HomeNews
            },
    
            {
                path: 'HomeMessage',
                component: HomeMessage
         }],
        
    },

    {
        path: '/About',
        component: About,
        meta: {
            title : '关于'
        }
    },

    {
        path: '/User/:userId',
        component: User,
        meta: {
            title : '用户'
        }
    },
    {
        path: '/Profile',
        component: Profile,
        meta: {
            title : '档案'
        }
    }
]

const router = new VueRouter({
    //配置路由和组件之间的应用关系
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {   //全局导航守卫
    document.title = to.matched[0].meta.title
    // console.log(to)
    next()
})

//3.将router对象传入到vue实例中
export default router