<template>
  <div ref="mainId" :style="{width: pieWidth,height: pieHeight}"></div>
</template>

<script>
export default {
  name: 'pie_echart',
  props: [
    'pieWidth',
    'pieHeight'
  ],
  mounted () {
    this.initEchartPie()
  },
  methods: {
    initEchartPie () {
      let myEchart = this.$echarts.init(this.$refs.mainId)
      myEchart.setOption({
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
              {value:235, name:'视频广告'},
              {value:274, name:'联盟广告'},
              {value:310, name:'邮件营销'},
              {value:335, name:'直接访问'},
              {value:400, name:'搜索引擎'}
            ]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>