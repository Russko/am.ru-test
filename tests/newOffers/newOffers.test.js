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

// it('new test', () => {})

  it('Проверка title на странице Подачи нового объявления', () => {
    const title = browser.getTitle()
    expect(title).to.equal(page.title)
  })

  it.only('Подача нового объявления', () => {
    page.loginHederLink().click()
    const loginP = new LoginPage()
    loginP.login('test9@lackmail.ru', 'qwertyp0p')
    const cabinetP = new CabinetPage()
    cabinetP.loginHederLink().click()
    page.brandAcuraLink().click()
    browser.pause(2500)
    page.modelVigorLink().click()
    browser.pause(2500)
    page.doorsLink().click()
    browser.pause(2500)
    page.yearCarLink().click()
    browser.pause(2500)
    page.modificationLink().click()
    browser.pause(2500)
    page.stateCarLink().click()
    browser.pause(2500)
    page.colorCarLink().click()
    browser.pause(2500)
    page.milage('3070')
    browser.pause(2500)
    page.ptsLink().click()
    browser.pause(2500)
    page.stepTwoLink().click()
    browser.pause(2500)
    page.stepFreeLink().click()
    browser.pause(2500)
    page.stepFourLink().click()
    browser.pause(2500)
    page.step4('Тестер', 'Набережная 17', '89650586487', '700000')
    browser.pause(2500)
    const title = browser.getTitle()
    expect(title).to.equal(page.title)
  })
})
