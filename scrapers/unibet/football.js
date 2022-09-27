const dataService = require('../../services/getData')

const footballScraper = async (link, temp) => {
  try {
    const data = dataService.getJsonData(link)
    const groups = data.layout.sections[1].widgets[0].matches.groups

    for (let i = 0; i < groups.length; i++) {
      const events = groups[i].events
      if (events) {
        for (let j = 0; j < events.length; j++) {
          if (events[j].mainBetOffer) {
            const obj = {
              bookmaker: 'unibet',
              Team1: events[j].mainBetOffer.outcomes[0].participant,
              Team2: events[j].mainBetOffer.outcomes[2].participant,
              Odds_win1: events[j].mainBetOffer.outcomes[0].oddsDecimal,
              Odds_draw: events[j].mainBetOffer.outcomes[1].oddsDecimal,
              Odds_win2: events[j].mainBetOffer.outcomes[2].oddsDecimal,
              gameDate: events[j].event.start
            }
            temp.push(obj)
          }
        }
      }
    }
  } catch (err) {
    console.error(err)
  }
  
}

module.exports = {
  footballScraper
}