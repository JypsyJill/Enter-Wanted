const functions = require('../Supporting Data/test-assets/functions')
const selectors = require('../Supporting Data/test-assets/selectors')
const data = require('../Supporting Data/test-assets/data')
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    },
    after: browser => {
        browser.end()

    },

    'New Name Test': browser => {
        browser.expect.element('#saveBtn').to.not.be.enabled
        functions.nameTest(browser, selectors.selector, data.nametest)

    },
    'Bad Data Test': browser => {
        browser.expect.element('#saveBtn').to.not.be.enabled
        functions.nameTest(browser, selectors.selector, data.baddata)
    }, 
    'testingLow': browser => {
        browser.expect.element('#saveBtn').to.not.be.enabled
        functions.nameTest(browser, selectors.selector, data.testingLow)
    },
    'testingHigh': browser => {
        browser.expect.element('#saveBtn').to.not.be.enabled
        functions.nameTest(browser, selectors.selector, data.testingHigh)
    },
    'testingOutside': browser => {
        browser.expect.element('#saveBtn').to.not.be.enabled
        functions.nameTest(browser, selectors.selector, data.testingOutside)
    },
    'testingInside': browser => {
        browser.expect.element('#saveBtn').to.not.be.enabled
        functions.nameTest(browser, selectors.selector, data.testingInside)
    },
    'testingTwist': browser => {
        browser.expect.element('#saveBtn').to.not.be.enabled
        functions.nameTest(browser, selectors.selector, data.testingTwist)
    }
    }

