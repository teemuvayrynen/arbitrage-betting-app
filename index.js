const puppeteer = require('puppeteer')
const links = require('./links.json')
const unibetFootball = require('./scrapers/unibet/football')

const run = async () => {
  // const browser = await puppeteer.launch({
  //   headless: false
  // })

  // let page = await browser.newPage()


  // await page.goto('https://www.unibet.com/betting/sports/filter/football/argentina/all/matches')
  // await page.waitForSelector('ul', { timeout: 5_000 })

  // await unibetFootball.footballScrape(page)

  unibetFootball.footballScrape()

}



run()