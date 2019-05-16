const puppeteer = require("puppeteer-extra")
const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())

// const BASE_URL = 'https://www.supremenewyork.com/shop/all/accessories'
// const CHECKOUT = 'https://www.supremenewyork.com/checkout'
// const BASE_URL1 = 'https://www.supremenewyork.com/shop/all/accessories'

// const itemList = "Supreme®/ENO® DoubleNest® Hammock";
// // const itemColor = 'White'
// const itemList1 = 'Supreme®/Hanes® Tagless Tees (3 Pack)'
// const itemColor1 = 'Black'
// const itemSize1 = 'Large'

// const firstCard = {
//   name: 'Ross Carmack',
//   email: "test@gmail.com",
//   telephone: "2142846049",
//   address: '111 Test Drive',
//   zipcode: '75075',
//   city: 'Plano',
//   cc: '1111111111111111',
//   ccMonth: '11',
//   ccYear: '2021',
//   CVV: '111'
// }

// const secondCard = {
//   name: 'Ross Carmack',
//   email: "test@gmail.com",
//   telephone: "2142846049",
//   address: '111 Test Drive',
//   zipcode: '75075',
//   city: 'plano',
//   cc: '1111111111111111',
//   ccMonth: '11',
//   ccYear: '2021',
//   CVV: '111'
// }



const supremeCard1 = async ({BASE_URL, CHECKOUT, itemList1, name, email, telephone, address, zipcode, city, cc, ccMonth, ccYear, CVV}) => {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(BASE_URL);

  let itemSelection = await page.$x(`//a[contains(text(), "${itemList1}")]`)

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

const supremeCard2 = async () => {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(BASE_URL1);

  let itemSelection = await page.$x(`//a[contains(text(), "${itemList1}")]`)

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

  await page.type('input[id="order_billing_name"]', secondCard.name)
  // await page.$eval('input[id="order_billing_name"]', el => el.value = 'Test Testerson')

  await page.type('input[id="order_email"]', secondCard.email)

  await page.type('input[id="order_tel"]', secondCard.telephone)

  await page.type('input[id="bo"]', secondCard.address)

  await page.type('input[id="order_billing_zip"]', secondCard.zipcode)

  await page.type('input[id="order_billing_city"]', secondCard.city)

  await page.type('input[id="nnaerb"]', secondCard.cc)

  await page.select('select#credit_card_month', secondCard.ccMonth)

  await page.select('select#credit_card_year', secondCard.ccYear)

  await page.type('input[id="orcer"]', secondCard.CVV)

  await page.click("#order_terms")

  await page.click('input[name = "commit"]')


}


const tester = async ({BASE_URL, CHECKOUT, itemList1, name, email, telephone, address, zipcode, city, cc, ccMonth, ccYear, CVV}) => {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(BASE_URL);

  let itemSelection = await page.$x(`//a[contains(text(), "${itemList1}")]`)

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





module.exports.supremeCard1 = supremeCard1;
module.exports.supremeCard2 = supremeCard2;
module.exports.tester = tester;