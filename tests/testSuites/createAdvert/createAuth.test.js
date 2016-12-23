import { expect } from 'chai'
import AddAdvertPage from '../../pages/addAdvertPage.po'
import AuthPage from '../../pages/authPage.po'
import CabinetPage from '../../pages/cabinet.po'

describe('NewOffers Page', () => {
  let page

  beforeEach(() => {
    page = new AddAdvertPage()
    page.open()
  })

  it('Проверка title на странице Подачи нового объявления', () => {
    const title = browser.getTitle()
    expect(title).to.equal(page.title)
  })

  it.only('Подача нового объявления', () => {
    page.loginHederLink().click()
    const loginP = new AuthPage()
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
    // browser.waitForExist('#years-place .b-input-list')
    page.yearCarLink().click()
    browser.pause(2500)
    // browser.waitForExist('#modifications-place .b-input-list modification')
    page.modificationLink().click()
    browser.pause(2500)
    // browser.waitForExist('#carstates-place .b-input-list')
    page.stateCarLink().click()
    // browser.waitForExist('#colors-place .b-palette__wrapper')
    page.colorCarLink().click()
    browser.pause(2500)
    // browser.waitForExist('#milage-place')
    page.milage('3070')
    browser.waitForExist('#owners-place .b-input-list')
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
