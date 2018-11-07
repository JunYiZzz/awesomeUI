// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import aweUI from './index'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(aweUI);

Vue.config.debug = true;

const router = new VueRouter({
  routes: [
      {
          path: '/input',
          component: (resolve) => require(['./routers/input.vue'], resolve)
      },
      {
        path: '/icon',
        component: (resolve) => require(['./routers/icon.vue'], resolve)
    },
    {
        path: '/button',
        component: (resolve) => require(['./routers/button.vue'], resolve)
    },
    ]
  });

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
