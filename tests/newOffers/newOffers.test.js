import { expect } from 'chai'
import NewOffersPage from './newOffers.po'
import LoginPage from '../login/login.po'
import CabinetPage from '../cabinet/cabinet.po'

describe('NewOffers Page', () => {
  let page

  beforeEach(() => {
    page = new NewOffersPage()
    page.open()
  })

  it('Проверка title на странице Подачи нового объявления', () => {
    const title = browser.getTitle()
    expect(title).to.equal(page.title)
  })

  it.only('Подача нового объявления', () => {
    page.loginHederLink().click()
    const loginP = new LoginPage()
    loginP.login('test9@lackmail.ru', 'qwertyp0p')
    const cabinetP = new CabinetPage()
    cabinetP.wait()
    cabinetP.selectCityLink().click()
    browser.waitForExist('.au-modal__header')
    cabinetP.selectCity('Сорск')
    cabinetP.addOfferButton().click()
    browser.waitForExist('#au-tab-step1')
    page.brandAcuraLink().click()
    browser.waitForExist('#models-place .column')
    // browser.waitUntil(() => {
    //   const container = browser.element('#models-place')
    //   const columns = container.elements('.column').value
    //   return columns.length > 0
    // })
    // console.log(browser.element('#models-place').elements('.column'))
    page.modelVigorLink().click()
    browser.pause(2500)
    // browser.waitForExist('#doorsnums-place')
    page.doorsLink().click()
    browser.pause(2500)
    // browser.waitForExist('#years-place')
    page.yearCarLink().click()
    browser.pause(2500)
    // browser.waitForExist('#modifications-place')
    page.modificationLink().click()
    browser.pause(2500)
    // browser.waitForExist('#carstates-place')
    page.stateCarLink().click()
    // browser.waitForExist('#colors-place')
    page.colorCarLink().click()
    browser.pause(2500)
    // browser.waitForExist('#milage-place')
    page.milage('3070')
    // browser.waitForExist('#owners-place')
    page.ptsLink().click()
    page.stepTwoLink().click()
    browser.waitForExist('#au-tab-step2')
    page.stepFreeLink().click()
    browser.waitForExist('#au-tab-step3')
    page.stepFourLink().click()
    browser.waitForExist('#au-tab-step4')
    page.step4('Тестер', 'Сорск', 'Набережная 17', '89650586487', '700000')
    browser.url('/my_offers')
    browser.pause(5000)
    const exist = browser.waitForExist('.am-vas-advert__title')
    expect(exist).to.equal(true)
  })
})
