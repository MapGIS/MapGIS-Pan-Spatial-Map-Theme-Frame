<template>
  <mp-pan-spatial-map-example-side-menu
    :theme-mode="sideTheme"
    :collapsible="false"
    :collapsed="true"
    :content="content"
    :widgets="widgets"
    :widgetStructure="widgetStructure"
    :panel="panel"
    ref="sideMenu"
    class="right_panel_menu_example"
  />
</template>

<script>
import { ThemeContentMixin } from '@mapgis/web-app-framework'
import { mapState } from 'vuex'
import MpPanSpatialMapExampleSideMenu from '../../../../components/SideMenu/SideMenu.vue'

export default {
  name: 'MpPanSpatialMapExampleThemeRight',
  components: { MpPanSpatialMapExampleSideMenu },
  mixins: [ThemeContentMixin],
  computed: {
    ...mapState('setting', { themeMode: (state) => state.theme.mode }),
    sideTheme() {
      if (this.themeMode == 'dark') {
        return 'light'
      }
      return this.themeMode
    },
  },
  methods: {
    onUpdateWidgetState(e) {
      this.$refs.sideMenu.onUpdateWidgetState(e)
    },
  },
}
</script>
