<template>
  <mapgis-ui-layout-header :class="[themeMode, 'header-wrapper']">
    <div class="header-wide">
      <div class="header-left">
        <slot name="header-left">
          <div :class="['logo', themeMode]">
            <mapgis-ui-icon :icon="appLogo" class="icon" />
            <h1>{{ application.title }}</h1>
            <h2>{{ application.subtitle }}</h2>
            <img :src="imgSrc" alt="" />
          </div>
        </slot>
      </div>
      <div class="header-content">
        <slot name="header-content" />
      </div>
      <div :class="['header-right-normal', themeMode]">
        <slot name="header-right" />
      </div>
    </div>
  </mapgis-ui-layout-header>
</template>

<script>
import { AppMixin } from '@mapgis/web-app-framework'

export default {
  name: 'MpPanSpatialMapHeader1',
  mixins: [AppMixin],
  props: {
    themeMode: {
      type: String,
      required: false,
      default: 'dark',
    },
  },
  data() {
    return {}
  },
  computed: {
    // dark主题下header主色调与light不同
    themeStyle() {
      if (this.application.theme) {
        if (this.application.theme.style) {
          if (this.application.theme.manifest) {
            const style = this.application.theme.manifest.styles.find(
              (item) => {
                return item.name === this.application.theme.style
              }
            )

            if (style) {
              return {
                color: style.color,
                theme: style.theme,
              }
            }
          }
        } else if (this.application.theme.customStyle) {
          return this.application.theme.customStyle
        }
      }
      return { theme: 'dark', color: '#1890ff' }
    },
    publicPath() {
      return this.application.publicPath
    },
    imgSrc() {
      return this.publicPath + 'widget/top-bg.png'
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  height: 48px;
  line-height: 48px;
  padding: 0;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
  .header-wide {
    display: flex;
    height: 48px;
    padding-left: 8px;
    // background-color: $layout-header-background;
    .header-left {
      display: flex;
      min-width: 240px;
      .logo {
        position: relative;
        height: 48px;
        overflow: hidden;
        .icon {
          // color: $primary-color;
          font-size: 32px;
          margin-right: 8px;
          position: relative;
          /deep/img {
            vertical-align: unset !important;
          }
          /deep/i {
            font-size: 32px;
          }
        }
        h1 {
          display: inline-block;
          margin: 0 0 0 12px;
          font-weight: 400;
          font-size: 16px;
          vertical-align: top;
          color: inherit;
        }
        h2 {
          display: inline-block;
          margin: 0 0 0 12px;
          font-weight: 400;
          font-size: 14px;
          vertical-align: top;
          color: inherit;
        }
      }
    }
    .header-content {
      flex: 1 1 0%;
      min-width: 0;
    }
  }
}
</style>

<style lang="scss">
.header-wrapper {
  .header-wide {
    .header-right-normal {
      display: flex;
      float: right;
      height: 48px;
      overflow: hidden;
      padding-right: 8px;
      color: inherit;
      .header-item {
        height: 100%;
        display: flex;
        align-items: center;
        color: inherit;
        padding: 0 12px;
        cursor: pointer;
        a {
          color: inherit;
          i {
            font-size: 16px;
          }
        }
      }
      // less写法
      // each(@theme-list, {
      //   &.@{value} .header-item {
      //     &:hover {
      //       @class: ~'hover-bg-color-@{value}';
      // background-color: @@class;
      // }
      //   }
      // });
      // @each $theme in $theme-list {
      //   &.#{$theme} .header-item {
      //     &:hover {
      //       background-color: map-get(
      //         $header-right-background,
      //         hover-bg-color-#{$theme}
      //       );
      //     }
      //   }
      // }
    }
  }
}
</style>
