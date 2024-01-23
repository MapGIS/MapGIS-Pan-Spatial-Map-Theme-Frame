import { default as MpPanSpatialMapToolbarCard } from './ToolbarCard.vue'

MpPanSpatialMapToolbarCard.install = (Vue) => {
  Vue.component(
    (MpPanSpatialMapToolbarCard.options && MpPanSpatialMapToolbarCard.options.name) ||
      MpPanSpatialMapToolbarCard.name,
    MpPanSpatialMapToolbarCard
  )
}

export { MpPanSpatialMapToolbarCard }
