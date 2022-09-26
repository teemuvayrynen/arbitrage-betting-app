const fs = require('fs')
const scraperUnibet = require('../scrapers/unibet/football')
const scraperPaf = require('../scrapers/paf/football')
const calculate = require('./arbitrage')

const parseFootball = async () => {
  try {
    const links = JSON.parse(fs.readFileSync('footballLinks.json'))
    const matches = JSON.parse(fs.readFileSync('matches.json'))

    for (let i = 0; i < links.length; i++) {
      const bookmaker = links[i]

      for (let j = 0; j < bookmaker.links.length; j++) {
        const link = bookmaker.links[j]
        if  (bookmaker.name == 'unibet') {
          await scraperUnibet.footballScraper(link.link, matches)
        } else if (bookmaker.name == 'paf') {
          await scraperPaf.footballScraper(link.link, matches)
        }
      }
    }

    fs.writeFileSync('matches.json', JSON.stringify(matches))

    calculate.arbitrage()

  } catch (err) {
    console.error(err)
  }

}


module.exports = {
  parseFootball
}