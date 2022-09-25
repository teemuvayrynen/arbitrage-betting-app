const fs = require('fs')
const scraperUnibet = require('../scrapers/unibet/football')

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
        }
      }
    }

    fs.writeFileSync('matches.json', JSON.stringify(matches))

  } catch (err) {
    console.error(err)
  }

}


module.exports = {
  parseFootball
}