module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    },
    after: browser => {
        browser.end()
    },
   'Try this Name': browser => {
    browser
    .setValue('input[name="namInput"]','Try This') 
    .click("#saveBtn")
    .pause(5000)
    .expect.element('p[id="validHeader"]').text.to.equal('Errors Received:')
   },
  
    'New Name Test': browser => {
    browser
    .setValue('input[name="hdrInput"]','Testing Fields')
    .setValue('input[name="mkeInput"]','MARY')
    .setValue('input[name="oriInput"]','123456789')
    .setValue('input[name="namInput"]','Jill Peterson')
    .setValue('input[name="sexInput"]',"F")
    .setValue('input[name="racInput"]',"W")
    .setValue('input[name="hgtInput"]',"508")
    .setValue('input[name="wgtInput"]',"185")
    .setValue('input[name="haiInput"]',"Blonde")
    .setValue('input[name="offInput"]',"Loitering")
    .setValue('input[name="dowInput"]',"04211987")
    .click("#saveBtn")
    .pause(3000)
    .expect.element('p[id="validHeader"]').text.to.equal("Valid")
},
}
