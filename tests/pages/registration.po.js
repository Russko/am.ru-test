class RegistrationPage {
  constructor() {
    this.title = 'Регистрация на am.ru'
  }

  open() {
    browser.url('/registration')
    this.wait()
  }

  wait() {
    browser.waitForExist('#js-registration-submit')
  }

  check() {
    return browser.waitForExist('#js-registration-submit')
  }
}

export default RegistrationPage
