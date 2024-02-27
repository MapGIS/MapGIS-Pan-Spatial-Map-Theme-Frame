import { default as MpPanSpatialMapSidePanel } from './SidePanel.vue'

MpPanSpatialMapSidePanel.install = (Vue) => {
  Vue.component(
    (MpPanSpatialMapSidePanel.options && MpPanSpatialMapSidePanel.options.name) ||
      MpPanSpatialMapSidePanel.name,
    MpPanSpatialMapSidePanel
  )
}

export { MpPanSpatialMapSidePanel }
