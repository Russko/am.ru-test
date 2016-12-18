class CabinetPage {
  constructor() {
    this.title = 'Продажа автомобилей — выгодно купить и продать — все авто на am.ru'
    // this.loginHederLink = () => browser.element('//*[@id="header"]/div[1]/div/div/ul/li[1]/a')
    this.addOfferButton = () => browser.element('.au-offer-actions__item')
    this.selectCityLink = () => browser.element('.js-top-city')
  }

  open() {
    browser.url('/')
    this.wait()
  }

  wait() {
    browser.waitForExist('.au-block')
  }

  check() {
    return browser.waitForExist('.au-block')
  }

  selectCity(city) {
    const locationInput = () => browser.element('/html/body/div[20]/div[3]/div[3]/div/div/div[1]/input')
    locationInput().setValue(city)
    browser.waitForExist('.ui-menu-item')
    browser.keys('\uE006')
  }
}

export default CabinetPage
