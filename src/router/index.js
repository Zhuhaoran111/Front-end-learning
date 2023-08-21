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
          path: '/baseForm/index',   //这里的路径就是你所建的页面在page下面的路径
          component: () => import('../components/page/baseForm/index.vue'),
          meta: {
            title: 'form表单封装'  //---这个就是上面的titile
          }
        },
        {
          path: '/baseButton/index',   //这里的路径就是你所建的页面在page下面的路径
          component: () => import('../components/page/baseButton/index.vue'),
          meta: {
            title: 'button按钮封装'  //---这个就是上面的titile
          }
        },
        {
          path: '/baseQueryForm/index',   //这里的路径就是你所建的页面在page下面的路径
          component: () => import('../components/page/baseQueryForm/index.vue'),
          meta: {
            title: '查询组件封装'  //---这个就是上面的titile
          }
        },
        {
          path: '/baseTree/index',   //这里的路径就是你所建的页面在page下面的路径
          component: () => import('../components/page/baseTree/index.vue'),
          meta: {
            title: 'el-tree组件'  //---这个就是上面的titile
          }
        },
        {
          path: '/mainBaseContent/el-table-excel/index',   //这里的路径就是你所建的页面在page下面的路径
          component: () => import('../components/page/mainBaseContent/el-table-excel/index.vue'),
          meta: {
            title: 'excel导出'  //---这个就是上面的titile
          }
        },

        {
          path: '/mainBaseContent/antv-g6/index',   //这里的路径就是你所建的页面在page下面的路径
          component: () => import('../components/page/mainBaseContent/antv-g6/index.vue'),
          meta: {
            title: 'excel导出'  //---这个就是上面的titile
          }
        },
      ]
    },
    {
      path: '/login',
      component: () => import('../components/page/Login.vue')
    },

  ]
})
