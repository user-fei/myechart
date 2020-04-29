<template>
  <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <div ref="mainId" :style="{width: barWidth,height: barHeight}"></div>
</template>

<script>
export default {
  name: 'bar_echart',
  data () {
    return {

    }
  },
  props: [
    'barWidth',
    'barHeight'
  ],
  mounted () {
    this.initEchartBasic()
  },
  methods: {
    initEchartBasic () {
      // 通过 echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的柱状图
      console.log('此刻初始化')
      // 基于准备好的dom，初始化echarts实例
      let myEchart = this.$echarts.init(this.$refs.mainId)
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myEchart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>