// 布局元素组件列表
let externalLayoutElementComponents = {}

/**
 * 设置布局元素组件列表
 * @param components
 */
function setExternalLayoutElementComponents(components) {
  // eslint-disable-next-line no-unused-vars
  externalLayoutElementComponents = components
}

/**
 * 布局元素组件是否存在
 */
function isExternalLayoutElementComponentExist(componentName) {
  let externalLayoutElementComponents = {}
  return Object.hasOwnProperty.call(
    externalLayoutElementComponents,
    componentName
  )
}

export {
  setExternalLayoutElementComponents,
  isExternalLayoutElementComponentExist,
}
