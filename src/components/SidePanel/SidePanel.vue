<template>
  <div class="mp-side-widget-panel">
    <div :style="{ display: 'inline-block', width: `${stuffWidth}px` }"></div>
    <mp-pan-spatial-map-side-card
      v-for="widget in widgetStructureSider"
      :key="getKey(widget)"
      :ref="getId(widget)"
      :widget="widget"
      :max-width="maxWidth"
      :visible="isWidgetVisible(getWidget(widget), 'content')"
      @update:visible="updateWidgetVisible($event, getWidget(widget))"
      @update-widget-state="$emit('update-widget-state', $event)"
      :class="{ active: isWidgetActive(widget) }"
      @mousedown.native.capture="onPanelClick(widget)"
    />
  </div>
</template>

<script>
// import { PanelMixin, MultiChildController } from "@mapgis/web-app-framework";
import { PanelMixin } from "@mapgis/web-app-framework";
import MpPanSpatialMapSideCard from "./SideCard.vue";

export default {
  // 组件名称，统一以"Mp"开头
  name: "MpPanSpatialMapSidePanel1",
  components: { MpPanSpatialMapSideCard },
  mixins: [PanelMixin],
  props: {
    maxWidth: { type: [Number, Function] },
  },
  watch: {
    stuffWidth: {
      immediate: true,
      handler() {
        // 控制罗盘随左侧微件内容面板宽度改变而改变
        const compassDiv = document.querySelector(".compass");
        if (compassDiv) {
          compassDiv.style.left = `${this.stuffWidth + 45}px`;
        }
      },
    },
  },
  computed: {
    stuffWidth() {
      const visibleWidget = this.widgets.find((widget) =>
        this.isWidgetVisible(widget, "content")
      );

      if (
        visibleWidget &&
        this.$refs[visibleWidget.id] &&
        this.$refs[visibleWidget.id][0]
      ) {
        return this.$refs[visibleWidget.id][0].$refs.sideWindow.currentWidth;
      }

      if (
        visibleWidget &&
        window.MultiChildController.isMultiTabsChild(visibleWidget.id)
      ) {
        return this.$refs[
          window.MultiChildController.getCurrentTabs().folderKey
        ][0].$refs.sideWindow.currentWidth;
      }

      return 0;
    },
    getKey() {
      return (widget) => {
        return (
          widget.uri ||
          (widget.children &&
            widget.children.length > 0 &&
            widget.children[0].uri)
        );
      };
    },
    getId() {
      return (widget) => {
        return (
          widget.id ||
          (widget.children &&
            widget.children.length > 0 &&
            widget.children[0].id)
        );
      };
    },
    getWidget() {
      return (widget) => {
        return widget.children && widget.children.length > 0
          ? widget.children[0]
          : widget;
      };
    },
  },
  methods: {
    onPanelClick(widget) {
      if (widget.children && widget.children.length > 0) return;
      this.activateWidget(widget);
    },
    setMultiChild() {
      const multiData = [];
      let multiChild = [];
      this.widgetStructureSider.forEach((item) => {
        if (item.children && item.children.length > 0) {
          const data = {
            activeKey: item.children[0].id,
            initKey: item.children[0].id,
            folderKey: item.id,
          };
          const keys = [];
          item.children.forEach((child) => keys.push(child.id));
          data[item.id] = keys;
          multiData.push(data);
          multiChild = [...multiChild, ...keys];
        }
      });
      window.MultiChildController.setMultiTabsArr(multiData);
      window.MultiChildController.setMultiTabsChildId(multiChild);
    },
  },
  mounted() {
    this.setMultiChild();
  },
};
</script>

<style lang="less" scoped>
.mp-side-widget-panel {
  position: relative;
}
</style>
