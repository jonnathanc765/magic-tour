const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'rankmitour',
      formats: ['es', 'umd', 'iife'],
      fileName: (format) => `rankmi-tour-example.${format}.js`
    },
    rollupOptions: {
      external: ['rankmi-tour-example']
    }
  },
}
