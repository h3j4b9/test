
import Vue from 'vue';
import Router from 'vue-router';

// import HelloWorld from '@/components/HelloWorld';
// import vantTest from '@/pages/vantTest';
import makeGroup from '@/pages/makeGroup';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    // },
    // {
    //   path: '/vantTest',
    //   component: vantTest,
    // },
    {
      path: '/makeGroup',
      component: makeGroup,
    },
    {
      path: '/',
      redirect: '/makeGroup',
    },
  ],
});
