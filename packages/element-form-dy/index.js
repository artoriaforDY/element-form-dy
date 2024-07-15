import elementFormDy from './element-form-dy'

const install = (Vue) => {
  Vue.component(elementFormDy.name, elementFormDy)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default elementFormDy
