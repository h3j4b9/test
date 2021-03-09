<template>
  <div class="outerMost">
    <img src="../img/myDist.jpg" class="bj_img">
    <span class="go_back" @click="go_back">返回</span>

    <span class="myFaqi" @click="myFaqi">我发起的</span>
    <span class="myJoin" @click="myJoin">我参与的</span>

    <div class="myFaqi_div" v-if="myFaqi_div_show"></div>
    <div class="myJoin_div" v-if="myJoin_div_show"></div>

    <div class="dataList"></div>
  </div>
</template>

<script>

export default {
  name: 'myDist',
  data () {
    return {
      myFaqi_div_show: true,
      myJoin_div_show: false,
    }
  },
  methods: {
    go_back () {
      this.$parent.distGoIndex();
    },
    myFaqi () {
      this.myFaqi_div_show = true;
      this.myJoin_div_show = false;
    },
    myJoin () {
      this.myFaqi_div_show = false;
      this.myJoin_div_show = true;
    },
  },
}
</script>

<style scoped>
.outerMost {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  /* height: 100%; */
  height: 1500px;
}
.bj_img {
  width: 100%;
  height: 100%;
}
.go_back {
  position: absolute;
  top: 20px;
  left: 20px;
}
.myFaqi {
  position: absolute;
  top: 80px;
  left: 100px;
  font-size: 50px;
}
.myJoin {
  position: absolute;
  top: 80px;
  right: 100px;
  font-size: 50px;
}
.myFaqi_div {
  position: absolute;
  top: 150px;
  left: 100px;
  width: 200px;
  height: 10px;
  background: darkseagreen;
  border-radius: 15px;
}
.myJoin_div {
  position: absolute;
  top: 150px;
  right: 100px;
  width: 200px;
  height: 10px;
  background: darkseagreen;
  border-radius: 15px;
}
.dataList {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translate(-50%);
  font-size: 50px;
  width: 700px;
  height: 900px;
  background: darkkhaki;
}
</style>