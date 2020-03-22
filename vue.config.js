module.exports = {
  lintOnSave: false,
  pwa: {
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: './service-worker.js',
        // ...other Workbox options...
    }
  }
}
