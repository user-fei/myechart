import BarEchart from './bar_echart/index'
import PieEchart from './pie_echart/index'

const components = [
  BarEchart,
  PieEchart
]


const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  BarEchart,
  PieEchart
}
   