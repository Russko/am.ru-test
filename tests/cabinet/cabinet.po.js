class CabinetPage {
  constructor() {
    this.title = 'Продажа автомобилей — выгодно купить и продать — все авто на am.ru'
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
