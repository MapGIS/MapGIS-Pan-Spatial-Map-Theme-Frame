import { default as MpPanSpatialMapHeader } from './Header.vue'

MpPanSpatialMapHeader.install = (Vue) => {
  Vue.component(
    (MpPanSpatialMapHeader.options && MpPanSpatialMapHeader.options.name) ||
      MpPanSpatialMapHeader.name,
    MpPanSpatialMapHeader
  )
}

export { MpPanSpatialMapHeader }
