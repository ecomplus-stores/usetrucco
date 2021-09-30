// storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/ProductGallery.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductGallery.html'),
      './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/html/APrices.html'),
      './js/APrices.js': path.resolve(__dirname, 'template/js/custom-js/js/APrices.js')
    }
  }
})