import { default as MpPanSpatialMapToolbarButton } from './ToolbarButton.vue'

MpPanSpatialMapToolbarButton.install = (Vue) => {
  Vue.component(
    (MpPanSpatialMapToolbarButton.options && MpPanSpatialMapToolbarButton.options.name) ||
      MpPanSpatialMapToolbarButton.name,
    MpPanSpatialMapToolbarButton
  )
}

export { MpPanSpatialMapToolbarButton }
