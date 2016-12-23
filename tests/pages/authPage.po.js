class AuthPage {
  constructor() {
    this.title = 'Вход на am.ru'
    this.registrationLink = () => browser.element('#content > div > div > div > div > div.b-form__footer > div.au-mbs > a')
    this.newOffersLink = () => browser.element('#footer-top > div > div > div.au-grid.au-grid-left > div > div > div:nth-child(1) > div:nth-child(2) > dl > dt > a')
  }

  open() {
    browser.url('/login')
    this.wait()
  }

  wait() {
    browser.waitForExist('.au-page-content')
  }

  check() {
    return browser.waitForExist('.au-page-content')
  }


  login(email, password) {
    const emailInput = () => browser.element('#login')
    const passwordInput = () => browser.element('#loginPassword')
    const loginButton = () => browser.element('#loginSubmit')

    emailInput().setValue(email)
    passwordInput().setValue(password)
    loginButton().click()
  }
}

export default AuthPage
