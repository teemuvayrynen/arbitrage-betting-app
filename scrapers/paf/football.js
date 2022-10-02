const dataService = require('../../services/getData')

const footballScraper = async (link, temp) => {
  try {
    console.log(link)
    const data = await dataService.getJsonAxios(link)
    const events = data.events

    if (events.length > 0) {
      for (let i = 0; i < events.length; i++) {
        if (events[i].betOffers[0]) {
          const obj = {
            bookmaker: 'paf',
            Team1: events[i].betOffers[0].outcomes[0].participant,
            Team2: events[i].betOffers[0].outcomes[2].participant,
            Odds_win1: (events[i].betOffers[0].outcomes[0].odds / 1000),
            Odds_draw: (events[i].betOffers[0].outcomes[1].odds / 1000),
            Odds_win2: (events[i].betOffers[0].outcomes[2].odds / 1000),
            gameDate: events[i].event.start
          }   
          temp.push(obj)
        }
      }
    }
  } catch (err) {
    await footballScraper(link, temp)
  }
}

module.exports = {
  footballScraper
}