import { expect } from 'chai'
import LoginPage from './login.po'

describe('Login Page', () => {
  let page

  beforeEach(() => {
    page = new LoginPage()
    page.open()
  })

  it('should have a title', () => {
    const title = browser.getTitle()
    expect(title).to.equal(page.title)
  })

  it('should not login an unknown user', () => {
    page.login('misha@am.ru', 'test123')
    expect(page.check()).to.equal(true)
  })

  it('тест кейс1', () => {
  })

  it('тест кейс2', () => {
  })

  it('тест кейс3', () => {
  })
})
