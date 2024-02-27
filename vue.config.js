const CopyPlugin = require('copy-webpack-plugin')
const utils = require('./build/utils')

const distDir = utils.distDir
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: distDir,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // copy-webpack-plugin复制不了umd.min.js文件
      new CopyPlugin([{ from: 'themes', to: '' }]),
      function CustomPlugin(compiler) {
        const filename = compiler.options.output.filename
        compiler.hooks.done.tap('CustomPlugin', () => {
          if (filename.indexOf('.umd.min.js') > -1) {
            utils.generateConfig()
          }
        })
      },
    ],
    externals: {
      "@mapgis/webclient-vue-eventbus": "@mapgis/webclient-vue-eventbus",
      '@mapgis/web-app-framework': '@mapgis/web-app-framework',
      '@mapgis/cesium': '@mapgis/cesium',
      '@mapgis/geojson-vt': '@mapgis/geojson-vt',
      '@mapgis/mapbox-gl': '@mapgis/mapbox-gl',
      '@mapgis/mapbox-gl-compare': '@mapgis/mapbox-gl-compare',
      '@mapgis/mapbox-gl-draw': '@mapgis/mapbox-gl-draw',
      '@mapgis/mapbox-gl-draw-circle': '@mapgis/mapbox-gl-draw-circle',
      '@mapgis/mapbox-gl-draw-radius': '@mapgis/mapbox-gl-draw-radius',
      '@mapgis/mapbox-gl-draw-static-mode':
        '@mapgis/mapbox-gl-draw-static-mode',
      '@mapgis/mapbox-gl-inspect': '@mapgis/mapbox-gl-inspect',
      '@mapgis/supercluster': '@mapgis/supercluster',
      '@mapgis/webclient-es6-mapboxgl': '@mapgis/webclient-es6-mapboxgl',
      '@mapgis/webclient-es6-service': '@mapgis/webclient-es6-service',
      '@mapgis/webclient-plot': '@mapgis/webclient-plot',
      '@mapgis/webclient-store': '@mapgis/webclient-store',
      '@mapgis/webclient-vue-ui': '@mapgis/webclient-vue-ui',
      '@mapgis/webclient-vue-mapboxgl': '@mapgis/webclient-vue-mapboxgl',
      '@mapgis/webclient-vue-cesium': '@mapgis/webclient-vue-cesium',
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
      scss: {
        additionalData: `@import "./src/style/mapgis-ui/index.scss";`,
      },
    },
  },
}
