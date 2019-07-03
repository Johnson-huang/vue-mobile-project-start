import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  routes: [
    // 测试
    {
      path: '/test',
      component: () => import('@src/pages/Test.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {});

export default router;
