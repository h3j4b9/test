<template>
  <div>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <button @click="showPopup">展示弹出层</button>
    <van-popup class="div_1" position="center" v-model="show">
        <div class="div_2">
          <h1>ddasdadadasdaddasd</h1>
        </div>
    </van-popup>

    <button @click="hhhhh">展示遮罩层</button>
    <van-overlay  :show="show" @click="show = false">
    </van-overlay>

    <van-tabs @click="onClick">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import _ from 'lodash';

import Vue from 'vue';

import { Tab, Tabs, Popup, Overlay } from 'vant';

Vue.use(Popup, Overlay);

Vue.use(Tab);
Vue.use(Tabs);

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      show: false,
      showjjj: false,
    };
  },
  methods: {
    showPopup () {
      this.show = true;
    },
    hhhhh: _.throttle(function () {
      console.log(6565464564564);
    }, 2000),
    onClick () {
      console.log(6565464564564);
    },
  },
};
</script>

<style>

</style>
