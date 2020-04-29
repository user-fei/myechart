<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <h2>柱状图</h2>
      <barEchart :barWidth="width" :barHeight="height"></barEchart>
    </div>
    <div>
      <h2>饼状图</h2>
      <pieEchart :pieWidth="width" :pieHeight="height"></pieEchart>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import barEchart from '@/components/bar_echart/bar_echart'
import pieEchart from '@/components/pie_echart/pie_echart'

export default {
  name: 'Home',
  components: {
    barEchart,
    pieEchart
  },
  data () {
    return {
      width: 0,
      height: 0
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.width = 500 + 'px'
      this.height = 500 + 'px'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
