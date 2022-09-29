const fs = require('fs')
const scraperUnibet = require('../scrapers/unibet/football')
const scraperPaf = require('../scrapers/paf/football')
const subarrays = require('./subarrays')
const odds = require('./odds')

const parseFootball = async () => {
  try {
    // const links = JSON.parse(fs.readFileSync('footballLinks.json'))
    // const matches = JSON.parse(fs.readFileSync('matches.json'))

    // for (let i = 0; i < links.length; i++) {
    //   const bookmaker = links[i]
    //   var temp = []
    //   for (let j = 0; j < bookmaker.links.length; j++) {
    //     const link = bookmaker.links[j]
    //     if  (bookmaker.name == 'unibet') {
    //       await scraperUnibet.footballScraper(link.link, temp)
    //     } else if (bookmaker.name == 'paf') {
    //       await scraperPaf.footballScraper(link.link, temp)
    //     }
    //   }
    //   matches.push(temp)
    // }

    // fs.writeFileSync('matches.json', JSON.stringify(matches))

    const data = subarrays.create()
    
    return odds.calculate(data)

  } catch (err) {
    console.error(err)
  }
}


module.exports = {
  parseFootball
}