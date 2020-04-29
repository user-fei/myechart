import BarEchart from './bar_echart'

BarEchart.install = function (Vue) {
    console.log(BarEchart.name)
    Vue.component(BarEchart.name, BarEchart)
}

export default BarEchart