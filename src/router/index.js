import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/',
      component: () => import('../components/common/Base.vue'),
      meta: {
        title: '公共部分'
      },
      children: [
        {
          path: '/index',
          component: () => import('../components/page/Home.vue'),
          meta: {
            title: '系统首页'
          }
        },

        {
          path: '/tab',
          component: () => import('../components/page/Tab.vue'),
          meta: {
            title: 'tab选项卡'
          }
        },

        {
          path: '/baseTable/index',   //这里的路径就是你所建的页面在page下面的路径
          component: () => import('../components/page/baseTable/index.vue'),
          meta: {
            title: 'table表格封装'  //---这个就是上面的titile
          }
        },
        {
          path: '/baseButton/index',   //这里的路径就是你所建的页面在page下面的路径
          component: () => import('../components/page/baseButton/index.vue'),
          meta: {
            title: 'button按钮封装'  //---这个就是上面的titile
          }
        }
      ]
    },
  ]
})
