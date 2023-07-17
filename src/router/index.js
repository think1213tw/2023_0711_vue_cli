import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue')
      },
      // 動態路由 路徑寫法  :做開頭後面可以自定義名稱
      {
        path: 'dynamicrouter/:id',
        component: () => import('../views/DynamicRouter.vue')
      },
      // 動態路由 加上 Props
      {
        path: 'dynamicrouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log('router', route)
          return {
            id: route.params.id
          }
        }
      },
      // 具名視圖
      {
        path: 'namedview',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue')
            }
          },
          {
            path: 'a2c',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentC.vue')
            }
          }
        ]
      },
      // 路由方法
      {
        path: 'routerNavigation',
        component: () => import('../views/RouterNavigation.vue')
      }
    ]
  },
  // 404頁面 *代表全部頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向
  {
    path: '/newpage/:pathMatch(.*)*',
    redirect: {
      name: 'home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 以下兩個為常用的路由選項
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // `to 到哪一頁` 和 `from 從哪一頁來` 都是路由对象
    // console.log(to, from, savedPosition)

    // 到特地頁面要觸發滾動行為
    if (to.fullPath.match('/newpage')) {
      return {
        top: 0
      }
    }

    return {}
  }
})

export default router
