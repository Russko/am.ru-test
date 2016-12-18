import { expect } from 'chai'
import LoginPage from './login.po'
import CabinetPage from '../cabinet/cabinet.po'
import RegistrationPage from '../registration/registration.po'
import NewOffersPage from '../newOffers/newOffers.po'

describe('Login Page', () => {
  let page

  beforeEach(() => {
    page = new LoginPage()
    page.open()
  })

  it('При нажатии на ссылку в футере редирект к странице Подачи нового объявления', () => {
    page.newOffersLink().click()
    const newOffersPage = new NewOffersPage()
    expect(newOffersPage.check()).to.equal(true)
  })

  it('Проверка title на странице Авторизации', () => {
    const title = browser.getTitle()
    expect(title).to.equal(page.title)
  })

  it('Переход по ссылке на страницу регистрации', () => {
    page.registrationLink().click()
    const registrationPage = new RegistrationPage()
    expect(registrationPage.check()).to.equal(true)
  })

  it('Нельзя авторизоваться неизвестным юзером', () => {
    page.login('unknown@am.ru', 'test123')
    expect(page.check()).to.equal(true)
  })

  it('Нельзя авторизоваться с неверным паролем', () => {
    page.login('test9@lackmail.ru', 'test123')
    expect(page.check()).to.equal(true)
  })

  it('Авторизация пользователя с валидными данными', () => {
    page.login('test9@lackmail.ru', 'qwertyp0p')
    const cabinetPage = new CabinetPage()
    expect(cabinetPage.check()).to.equal(true)
  })
})
