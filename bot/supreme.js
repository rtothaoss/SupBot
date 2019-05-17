const puppeteer = require("puppeteer-extra")
const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())

// const BASE_URL = 'https://www.supremenewyork.com/shop/all/accessories'
// const CHECKOUT = 'https://www.supremenewyork.com/checkout'
// const BASE_URL1 = 'https://www.supremenewyork.com/shop/all/accessories'

// const itemList = "Fronts Keychain";
// // const itemColor = 'White'
// const itemList1 = 'Supreme®/McDermott™ Pool Cue'
// const itemColor1 = 'Black'
// const itemSize1 = 'Large'

// const firstCard = {
//   name: 'Ross Carmack',
//   email: "test@gmail.com",
//   telephone: "2142142142",
//   address: '123 test ave',
//   zipcode: '75075',
//   city: 'Plano',
//   cc: '111111111111111',
//   ccMonth: '03',
//   ccYear: '2022',
//   CVV: '808'
// }

// const secondCard = {
//   name: 'test testerson jr',
//   email: "test@gmail.com",
//   telephone: "2132132132",
//   address: '123 test ave',
//   zipcode: '75075',
//   city: 'Plano',
//   cc: '111111111111111',
//   ccMonth: '12',
//   ccYear: '2021',
//   CVV: '111'
// }



const accessoryBot1 = async ({BASE_URL, CHECKOUT, item1, name, email, telephone, address, zipcode, city, cc, ccMonth, ccYear, CVV}) => {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(BASE_URL);

  let itemSelection = await page.$x(`//a[contains(text(), "${item1}")]`)

  await itemSelection[0].click();

  await page.waitFor(700)

  // await page.click(`a[data-style-name = "${itemColor}"]`)

  await page.click('input[name = "commit"]')

  await page.waitFor(700)

  await page.goto(CHECKOUT);

  await page.type('input[id="order_billing_name"]', name)

  await page.type('input[id="order_email"]', email)

  await page.type('input[id="order_tel"]', telephone)

  await page.type('input[id="bo"]', address)

  await page.type('input[id="order_billing_zip"]', zipcode)

  await page.type('input[id="order_billing_city"]', city)

  await page.type('input[id="nnaerb"]', cc)

  await page.select('select#credit_card_month', ccMonth)

  await page.select('select#credit_card_year', ccYear)

  await page.type('input[id="orcer"]', CVV)

  await page.click("#order_terms")

  await page.click('input[name = "commit"]')



}

const accessoryBot2 = async ({BASE_URL, CHECKOUT, item2, name2, email2, telephone2, address2, zipcode2, city2, cc2, ccMonth2, ccYear2, CVV2}) => {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(BASE_URL);

  let itemSelection = await page.$x(`//a[contains(text(), "${item2}")]`)

  await itemSelection[0].click();

  await page.waitFor(700)

  // await page.click(`a[data-style-name = "${itemColor}"]`)

  await page.click('input[name = "commit"]')

  await page.waitFor(700)

  await page.goto(CHECKOUT);

  await page.type('input[id="order_billing_name"]', name2)

  await page.type('input[id="order_email"]', email2)

  await page.type('input[id="order_tel"]', telephone2)

  await page.type('input[id="bo"]', address2)

  await page.type('input[id="order_billing_zip"]', zipcode2)

  await page.type('input[id="order_billing_city"]', city2)

  await page.type('input[id="nnaerb"]', cc2)

  await page.select('select#credit_card_month', ccMonth2)

  await page.select('select#credit_card_year', ccYear2)

  await page.type('input[id="orcer"]', CVV2)

  await page.click("#order_terms")

  await page.click('input[name = "commit"]')



}

const botWithSize1 = async ({BASE_URL, CHECKOUT, item1, itemSize1, name, email, telephone, address, zipcode, city, cc, ccMonth, ccYear, CVV}) => {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(BASE_URL);

  let itemSelection = await page.$x(`//a[contains(text(), "${item1}")]`)

  await itemSelection[0].click();

  await page.waitFor(700)

  // await page.click(`a[data-style-name = "${itemColor1}"]`)

  let $elemHandler = await page.$('#s');
  let properties = await $elemHandler.getProperties();
  for (const property of properties.values()) {
    const element = property.asElement();
    if (element) {
      let hText = await element.getProperty("text");
      let text = await hText.jsonValue();
      if (text === `${itemSize1}`) {
        let hValue = await element.getProperty("value");
        let value = await hValue.jsonValue();
        await page.select("select#s", value); // or use 58730
        console.log(`Selected ${text} which is value ${value}.`);
      }
    }
  }

  await page.click('input[name = "commit"]')

  await page.waitFor(1500)

  await page.goto(CHECKOUT);

  await page.type('input[id="order_billing_name"]', name)
  // await page.$eval('input[id="order_billing_name"]', el => el.value = 'Test Testerson')

  await page.type('input[id="order_email"]', email)

  await page.type('input[id="order_tel"]', telephone)

  await page.type('input[id="bo"]', address)

  await page.type('input[id="order_billing_zip"]', zipcode)

  await page.type('input[id="order_billing_city"]', city)

  await page.type('input[id="nnaerb"]', cc)

  await page.select('select#credit_card_month', ccMonth)

  await page.select('select#credit_card_year', ccYear)

  await page.type('input[id="orcer"]', CVV)

  await page.click("#order_terms")

  await page.click('input[name = "commit"]')


}

const botWithSize2 = async ({BASE_URL, CHECKOUT, item2, itemSize2, name2, email2, telephone2, address2, zipcode2, city2, cc2, ccMonth2, ccYear2, CVV2}) => {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(BASE_URL);

  let itemSelection = await page.$x(`//a[contains(text(), "${item2}")]`)

  await itemSelection[0].click();

  await page.waitFor(700)

  // await page.click(`a[data-style-name = "${itemColor1}"]`)

  let $elemHandler = await page.$('#s');
  let properties = await $elemHandler.getProperties();
  for (const property of properties.values()) {
    const element = property.asElement();
    if (element) {
      let hText = await element.getProperty("text");
      let text = await hText.jsonValue();
      if (text === `${itemSize2}`) {
        let hValue = await element.getProperty("value");
        let value = await hValue.jsonValue();
        await page.select("select#s", value); // or use 58730
        console.log(`Selected ${text} which is value ${value}.`);
      }
    }
  }

  await page.click('input[name = "commit"]')

  await page.waitFor(1500)

  await page.goto(CHECKOUT);

  await page.type('input[id="order_billing_name"]', name2)
  // await page.$eval('input[id="order_billing_name"]', el => el.value = 'Test Testerson')

  await page.type('input[id="order_email"]', email2)

  await page.type('input[id="order_tel"]', telephone2)

  await page.type('input[id="bo"]', address2)

  await page.type('input[id="order_billing_zip"]', zipcode2)

  await page.type('input[id="order_billing_city"]', city2)

  await page.type('input[id="nnaerb"]', cc2)

  await page.select('select#credit_card_month', ccMonth2)

  await page.select('select#credit_card_year', ccYear2)

  await page.type('input[id="orcer"]', CVV2)

  await page.click("#order_terms")

  await page.click('input[name = "commit"]')


}

const tester = async ({BASE_URL, CHECKOUT, item, name, email, telephone, address, zipcode, city, cc, ccMonth, ccYear, CVV}) => {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(BASE_URL);

  let itemSelection = await page.$x(`//a[contains(text(), "${item}")]`)

  await itemSelection[0].click();

  await page.waitFor(700)

  // await page.click(`a[data-style-name = "${itemColor}"]`)

  await page.click('input[name = "commit"]')

  await page.waitFor(700)

  await page.goto(CHECKOUT);

  await page.type('input[id="order_billing_name"]', name)

  await page.type('input[id="order_email"]', email)

  await page.type('input[id="order_tel"]', telephone)

  await page.type('input[id="bo"]', address)

  await page.type('input[id="order_billing_zip"]', zipcode)

  await page.type('input[id="order_billing_city"]', city)

  await page.type('input[id="nnaerb"]', cc)

  await page.select('select#credit_card_month', ccMonth)

  await page.select('select#credit_card_year', ccYear)

  await page.type('input[id="orcer"]', CVV)

  await page.click("#order_terms")

  // await page.click('input[name = "commit"]')



}




// supremeCard1()
// supremeCard2()
// tester();



module.exports.accessoryBot1 = accessoryBot1;
module.exports.accessoryBot2 = accessoryBot2;
module.exports.botWithSize1 = botWithSize1;
module.exports.botWithSize2 = botWithSize2;
module.exports.tester = tester;