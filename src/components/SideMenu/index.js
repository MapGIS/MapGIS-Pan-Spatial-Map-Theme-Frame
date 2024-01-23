import { default as MpPanSpatialMapSideMenu } from './SideMenu.vue'

MpPanSpatialMapSideMenu.install = (Vue) => {
  Vue.component(
    (MpPanSpatialMapSideMenu.options && MpPanSpatialMapSideMenu.options.name) ||
      MpPanSpatialMapSideMenu.name,
    MpPanSpatialMapSideMenu
  )
}

export { MpPanSpatialMapSideMenu }
