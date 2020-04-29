import PieEchart from './pie_echart'

PieEchart.install = function (Vue) {
    Vue.component(PieEchart.name, PieEchart)
}

export default PieEchart