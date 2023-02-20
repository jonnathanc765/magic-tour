const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'rankmi-tour',
      formats: ['es', 'umd', 'iife'],
      fileName: (format) => `rankmi-tour.${format}.js`
    }
  },
}
