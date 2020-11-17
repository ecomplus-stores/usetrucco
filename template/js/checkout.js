import '#template/js/checkout'
import './custom-js/checkout'
import cartChange from '@ecomplus/shopping-cart'

window.ecomShippingApps = [111223, 1251, 1250]

if (window.storefrontApp.router.currentRoute.name === 'checkout') {
  window.storefront.on('widget:@ecomplus/widget-fb-pixel', function () {
    setTimeout(function () {
      document.querySelector('a[data-intermediator="mercadopago"]').click()
      console.log('entrei')
    }, 15000)
  })
}
cartChange.on('change', ({ data }) => {
  const location = window.location.hash.split('/')[window.location.hash.split('/').length - 1]
  const aparecerModal = false
  if (aparecerModal && location === 'cart') {
    var buyButton = document.querySelectorAll('.cart__btn-checkout')
    var modalConfirm = document.getElementById('checkToPay')
    var checkCart = document.getElementById('check-cart')
    if (buyButton.length) {
      buyButton[0].after(modalConfirm)
      if (checkCart.checked) {
        buyButton[0].style.display = 'block'
      } else {
        buyButton[0].style.display = 'none'
      }
    } else {
      if (modalConfirm.nodeType) {
        modalConfirm.style.display = 'none'
      }
    }
  } else {
    if (document.getElementById('checkToPay').nodeType) {
      document.getElementById('checkToPay').style.display = 'none'
    }
  }
})

const router1 = window.storefrontApp && window.storefrontApp.router
setInterval(function () {
  if (router1) {
    const emitCheckout1 = (name) => {
      if (document.getElementById('checkToPay')) {
        document.getElementById('checkToPay').style.display = 'none'
      }
    }

    const addRoute1ToData = ({ name }) => {
      if (name === 'account') {
        emitCheckout1(name)
      }
    }

    if (router1.currentRoute) {
      addRoute1ToData(router1.currentRoute)
    }
    router1.afterEach(addRoute1ToData)
  }
}, 300)
