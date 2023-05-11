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
          path: '/table',
          component: () => import('../components/page/Table.vue'),
          meta: {
            title: '表格'
          }
        }
      ]
    },
  ]
})
