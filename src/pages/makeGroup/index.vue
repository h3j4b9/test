<template>
  <div>
    <div class="outerMost" v-if="outerMost_show">
      <img src="./img/bj.png" class="img">
      <img src="./img/name_tb.png" class="name_tb">

      <div class="myDist" @click="myDist">我的拼团</div>
      <div class="actRule" @click="actRule">活动锦囊</div>

      <span class="h1_title">拼团赢好礼</span>
      <span class="h3_title">拼团赢好礼，礼品拿不停</span>

      <div class="click_btn">
        <span>开始拼团</span>
      </div>

      <div class="num_span"> 
        已有<span>3</span>人参加
      </div>

      <div class="dist_div">
        <p>活动奖品</p>
        <img src="./img/gift.png" class="gift_tb">
        <span>一等奖</span>
      </div>
    </div>
    
    <LuckyWheel></LuckyWheel>
    
    <myDist v-if="dist_show"></myDist>
    <actRule v-if="rule_show"></actRule>

  </div>
</template>

<script>
import myDist from './components/myDist';
import actRule from './components/actRule';
import LuckyWheel from "./components/LuckyWheel";

export default {
  name: 'makeGroup',
  data () {
    return {
      outerMost_show: true,
      dist_show: false,
      rule_show: false,
    }
  },
  components: {
    myDist,
    actRule,
    LuckyWheel,
  },
  methods: {
    myDist () {
      this.outerMost_show = false;
      this.dist_show = true;
    },
    actRule () {
      this.outerMost_show = false;
      this.rule_show = true;
    },
    distGoIndex () {
      this.outerMost_show = true;
      this.dist_show = false;
    },
    ruleGoIndex () {
      this.outerMost_show = true;
      this.rule_show = false;
    },
  },
};
</script>

<style scoped>
.outerMost {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  /* height: 800px; */
}
.img {
  width: 100%;
  height: 100%;
  /* height: 2240px; */
}
.name_tb {
  position: absolute;
  top: 20px;
  left: 20px;
}
.myDist {
  position: absolute;
  top: 20px;
  right: 180px;
}
.actRule {
  position: absolute;
  top: 20px;
  right: 20px;
}
.h1_title {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%);
  font-size: 50px;
}
.h3_title {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translate(-50%);
  font-size: 30px;
}
.click_btn {
  position: absolute;
  top: 900px;
  left: 50%;
  transform: translate(-50%);
  width: 400px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  background: #e4146a;
  border-radius: 15px;
}
.num_span {
  position: absolute;
  top: 1080px;
  left: 50%;
  transform: translate(-50%);
}
.dist_div {
  position: absolute;
  top: 1200px;
  left: 50%;
  transform: translate(-50%);
  width: 700px;
  height: 400px;
  background: #e3dfe8;
  border-radius: 15px;
  text-align: center;
}
.gift_tb {
  display: block;
  margin: 50px auto;
}
</style>
