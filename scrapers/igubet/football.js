const dataService = require('../../services/getData')

const footballScraper = async (link, temp) => {
  try {
    const data = await dataService.getJsonAxios(link)
    const events = data.data

    if (events.length > 0) {
      for (let i = 0; i < events.length; i++) {
        const event = events[i]
        if (event.main_market && event.main_market.outcomes.length == 3) {
          const obj = {
            bookmaker: 'igubet',
            Team1: event.main_market.outcomes[0].name,
            Team2: event.main_market.outcomes[2].name,
            Odds_win1: (event.main_market.outcomes[0].odds / 1000),
            Odds_draw: (event.main_market.outcomes[1].odds / 1000),
            Odds_win2: (event.main_market.outcomes[2].odds / 1000),
            gameDate: event.start_time
          }   
          temp.push(obj)
        }
      }
    }
  } catch (err) {
    console.log(err)
  }

}

module.exports = {
  footballScraper
}