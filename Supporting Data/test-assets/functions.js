/**
 * inputField clears, sets, and verifies an input field
 * @param {object} browser 
 * @param {string} selector 
 * @param {string} value 
 */
let inputField = (browser, selector, value) => {
    browser
    .clearValue(selector)
    .setValue(selector, value)
    .verify.value(selector, value)
}

let nameTest = (browser, selector, value) => {
    browser
        .waitForElementVisible('input[name="hdrInput"]', 3000)
        .setValue(selector.hdr, value.hdr)
        .setValue(selector.mke, value.mke)
        .setValue(selector.oai, value.oai)
        .setValue(selector.name, value.name)
        .setValue(selector.sex, value.sex)
        .setValue(selector.race, value.race)
        .setValue(selector.height, value.height)
        .setValue(selector.weight, value.weight)
        .setValue(selector.hair, value.hair)
        .setValue(selector.offense, value.offense)
        .setValue(selector.date, value.date)
        .setValue(selector.dl, value.dl)
        .setValue(selector.dlst, value.dlst)
        .setValue(selector.dlex, value.dlex)
        .setValue(selector.lplat, value.lplat)
        .setValue(selector.lpst, value.lplst)
        .setValue(selector.lyear, value.lyear)
        .pause(5000)
        .click('#saveBtn')
        .pause(5000)
       
}

module.exports = {
    nameTest : nameTest
}
// let tryThis = (browser, selector, value) => {
//     browser
//             .setValue('input[name="namInput"]', 'Try This')
//             .click("#saveBtn")
//             .pause(1000)
//             .expect.element('p[id="validHeader"]').text.to.equal('Errors Received:')
// }

// module.exports = {
//     tryThis : tryThis
// }