class CabinetPage {
  constructor() {
    this.title = 'Продажа автомобилей — выгодно купить и продать — все авто на am.ru'
    this.loginHederLink = () => browser.element('//*[@id="header"]/div[1]/div/div/ul/li[1]/a')
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
}

export default CabinetPage
