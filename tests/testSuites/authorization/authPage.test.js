import { expect } from 'chai'
import AuthPage from '../../pages/authPage.po'
import CabinetPage from '../../pages/cabinet.po'
import RegistrationPage from '../../pages/registration.po'
import AddAdvertPage from '../../pages/addAdvertPage.po'

describe('Login Page', () => {
  let page

  beforeEach(() => {
    page = new AuthPage()
    page.open()
  })

  it('При нажатии на ссылку в футере редирект к странице Подачи нового объявления', () => {
    page.newOffersLink().click()
    const newOffersPage = new AddAdvertPage()
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
