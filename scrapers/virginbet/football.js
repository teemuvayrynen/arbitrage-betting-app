const dataService = require('../../services/getData')

const footballScraper = async (links, temp, i) => {
  try {
    const resp = await dataService.getJsonAxios(links.categories)
    const categories = resp.competitions[0].childs

    for (i; i < categories.length; i++) {
      const id = categories[i].id
      
      const link = `${links.base_url}&categoryid=${id}`
      console.log(link)
      const events = await dataService.getJsonAxios(link)
      const matches = events.events.categories[0].events

      for (let j = 0; j < matches.length; j++) {
        const event = matches[j]
        
        if (event.markets.length >= 1 && event.markets[0].selections.length == 3) {
          const obj = {
            bookmaker: 'virginbet',
            Team1: event.markets[0].selections[0].name,
            Team2: event.markets[0].selections[2].name,
            Odds_win1: event.markets[0].selections[0].displayOdds.decimal,
            Odds_draw:event.markets[0].selections[1].displayOdds.decimal,
            Odds_win2: event.markets[0].selections[2].displayOdds.decimal,
            gameDate: event.startTime
          }   
          temp.push(obj)
        }
      }
    }
  } catch (err) {
    await footballScraper(links, temp, i)
  }
}

const delay = ms => new Promise(res => setTimeout(res, ms))

module.exports = {
  footballScraper
}