<template>
  <div class="toollist-content">
    <template v-for="widget in widgets">
      <mp-pan-spatial-map-example-tool-list-button
        :widget="widget"
        :key="widget.id"
        :active="isActiveWidget(widget)"
        @click="onWidgetClick(widget)"
      />
    </template>
  </div>
</template>

<script>
import {
  ThemeContentMixin,
  WidgetManager,
  WidgetState,
} from '@mapgis/web-app-framework'
import MpPanSpatialMapExampleToolListButton from '../../../../components/ToolbarButton/ToolListButton.vue'

export default {
  name: 'MpPanSpatialMapExampleThemeToolList',
  components: { MpPanSpatialMapExampleToolListButton },
  mixins: [ThemeContentMixin],
  methods: {
    onWidgetClick(widget) {
      WidgetManager.getInstance().triggerWidgetOpen(widget)
    },
    isActiveWidget(widget) {
      if (widget.state !== WidgetState.CLOSED) {
        return true
      } else {
        return false
      }
    },
    closeAllWidgets() {
      this.widgets.forEach((widget) => {
        WidgetManager.getInstance().closeWidget(widget)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.toollist-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
