<template>
  <mp-pan-spatial-map-side-menu
    :theme-mode="sideTheme"
    :collapsible="false"
    :collapsed="true"
    :content="content"
    :widgets="currentWidgets"
    :widgetStructure="currentWidgetStructure"
    :panel="panel"
    ref="sideMenu"
  />
</template>

<script>
// import { mapState } from 'vuex'
import MpPanSpatialMapSideMenu from '../../../../components/SideMenu/SideMenu.vue'
import { ThemeContentMixin } from '@mapgis/web-app-framework'

export default {
  name: 'MpPanSpatialMapClassicLeft1',
  components: { MpPanSpatialMapSideMenu },
  mixins: [ThemeContentMixin],
  computed: {
    sideTheme() {
      return 'light'
    },
    currentWidgets() {
      return this.is2DMapMode ? this.widgets2d : this.widgets3d
    },
    currentWidgetStructure() {
      return this.is2DMapMode ? this.widgetStructure2d : this.widgetStructure3d
    },
  },
  methods: {
    onUpdateWidgetState(e) {
      this.$refs.sideMenu.onUpdateWidgetState(e)
    },
  },
}
</script>

<style lang="less" scoped></style>
