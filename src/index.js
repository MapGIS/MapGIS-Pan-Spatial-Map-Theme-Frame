import * as commonComponents from './components'
import * as themeComponents from './themes'

const components = { ...commonComponents, ...themeComponents }

const install = (Vue, opts = {}) => {
  for (const name in components) {
    const com = components[name]
    const registerName = com.options ? com.options.name : com.name
    if (registerName in Vue.options.components) {
      console.log(`发现同名组件[${registerName}],已取消该组件的注册`)
    } else {
      Vue.component(registerName, com)
    }
  }

  if (opts.components) {
    for (const key in opts.components) {
      if (Object.hasOwnProperty.call(opts.components, key)) {
        const component = opts.components[key]
        Vue.component(key, component)
      }
    }
  }
}

if (typeof window !== 'undefined' && window['MapgisApplicationVueRuntime']) {
  install(window['MapgisApplicationVueRuntime'], {})
}

export default {
  install,
}
