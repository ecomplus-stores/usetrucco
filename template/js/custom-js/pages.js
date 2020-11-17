// Add your custom JavaScript for storefront pages here.
window.storefront.on('widget:@ecomplus/widget-minicart', function () {
  setTimeout(function () {
    const infoChange = document.querySelector('.info-additional')
    const buy = document.querySelector('.product__buy')
    console.log(infoChange)
    buy.after(infoChange)
  }, 1000)
})
