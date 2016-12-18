class NewOffersPage {
  constructor() {
    this.title = 'Добавить объявление о продаже автомобиля - Продать автомобиль быстро и бесплатно'
    this.brandAcuraLink = () => browser.element('//*[@id="brands-place"]/div[1]/div/div[1]/div[2]/div[2]/div[2]/ul[1]/li[1]/a')
    this.modelVigorLink = () => browser.element('//*[@id="models-place"]/div[1]/div[1]/div[1]/div[4]/ul[1]/li/a')
    this.doorsLink = () => browser.element('//*[@id="doorsnums-place"]/div/div[1]/div/ul/li[3]/a')
    this.yearCarLink = () => browser.element('//*[@id="years-place"]/div/div[1]/div/ul/li[3]/a/span')
    this.modificationLink = () => browser.element('//*[@id="modifications-place"]/div[1]/div/div[1]/ul[1]/li[2]/a')
    this.stateCarLink = () => browser.element('//*[@id="carstates-place"]/div/div[1]/div/ul/li[4]/a')
    this.colorCarLink = () => browser.element('//*[@id="colors-place"]/div/div[1]/div/ul/li[5]/a')
    this.ptsLink = () => browser.element('//*[@id="owners-place"]/div/div/div/ul/li[2]/a')
    this.stepTwoLink = () => browser.element('//*[@id="au-tab-step1"]/div[8]/div/a/span')
    this.stepFreeLink = () => browser.element('//*[@id="au-tab-step2"]/div[2]/div/a/span')
    this.stepFourLink = () => browser.element('//*[@id="eq-props-button"]/span')
    this.loginHederLink = () => browser.element('//*[@id="header"]/div[2]/div/div/ul[2]/li[2]/a')
  }

  open() {
    browser.url('/my_offers/add')
    this.wait()
  }

  wait() {
    browser.waitForExist('#au-tab-step1')
  }

  check() {
    return browser.waitForExist('#au-tab-step1')
  }

  milage(kilometers) {
    const milageInput = () => browser.element('#milage')
    milageInput().setValue(kilometers)
  }

  step4(contact, region, showplace, phone, price) {
    const contactInput = () => browser.element('#contact')
    const regionLink = () => browser.element('.js-form-region-change')
    const regionInput = () => browser.element('.js-form-region-input')
    const showplaceInput = () => browser.element('#showplace')
    const phoneInput = () => browser.element('.js-form-phone-phone')
    const priceInput = () => browser.element('#price')
    const addOfferButton = () => browser.element('#add-form-submit')

    contactInput().setValue(contact)
    regionLink().click()
    browser.waitForExist('.js-form-region-input')
    regionInput().setValue(region)
    browser.waitForExist('.ui-menu-item')
    browser.keys('\uE006')
    showplaceInput().setValue(showplace)
    phoneInput().setValue(phone)
    priceInput().setValue(price)
    addOfferButton().click()
  }
}

export default NewOffersPage
