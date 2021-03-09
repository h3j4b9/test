<template>
  <LuckyWheel
    class="LuckyWheel"
    ref="LuckyWheel"
    :prizes="prizes"
    :default-style="defaultStyle"
    :blocks="blocks"
    :buttons="buttons"
    @start="startCallBack"
    @end="endCallBack"
  />
</template>

<script>
export default {
  data () {
    return {
      prizes: [],
      defaultStyle: {
        fontColor: '#d64737',
        fontSize: '14px'
      },
      blocks: [
        { padding: '13px', background: '#d64737' }
      ],
      buttons: [
        { radius: '50px', background: '#d64737' },
        { radius: '45px', background: '#fff' },
        { radius: '41px', background: '#f6c66f', pointer: true },
        {
          radius: '35px', background: '#ffdea0',
          imgs: [{ src: require('../img/gift.png'), width: '65%', top: '-50%' }]
        }
      ],
      defaultConfig: {
        gutter: '80px',  // string | number 扇形之间的缝隙 （默认等于 0）

        offsetDegree:  0,  //  number 转盘的偏移角度 （默认为 0 度）

        speed:  10,  // number 旋转速度峰值 （默认为 20，建议配置范围 10 ~ 30）

        //speedFunction:        // string 缓动函数 （当前版本固定为 quadratic 二次方加速，后期会提供更多可选函数）

        // accelerationTime:  5000,       //  number 开始旋转时间 （单位为毫秒，默认等于 2500 毫秒）

        // decelerationTime:  100,      //number 缓慢停止时间 （单位为毫秒，默认等于 2500 毫秒）
      }

    }
  },
  mounted () {
    this.getPrizesList()
  },
  methods: {
    getPrizesList () {
      this.prizes = []
      let data = ['1元红包', '100元红包', '0.5元红包', '2元红包', '10元红包', '50元红包', '0.3元红包', '5元红包']
      data.forEach((item, index) => {
        this.prizes.push({
          title: item,
          background: index % 2 ? '#f9e3bb' : '#f8d384',
          fonts: [{ text: item, top: '10%' }],
          imgs:[{ src: require(`../img/gift.png`), width: '30%', top: '35%' }],
        })
      })
    },
    startCallBack () {
      this.$refs.LuckyWheel.play()
      setTimeout(() => {
        this.$refs.LuckyWheel.stop(Math.random() * 8 >> 0)
      }, 1000)
    },
    endCallBack (prize) {
      alert(`恭喜你获得${prize.title}`)
    },
  }
}
</script>
<style scoped>
.LuckyWheel {
  position: absolute;
  top: 1700px;
  left: 50%;
  transform: translate(-50%);
  width: 710px;
  height: 710px;
}
</style>