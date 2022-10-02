const dataService = require('../../services/getData')

const footballScraper = async (link, temp) => {
  try {
    console.log(link)
    const resp = await dataService.getJsonAxios(link)
    
    if (resp.Result.Items.length > 0) {
      const events = resp.Result.Items[0].Events
      if (events.length > 0) {
        for (let i = 0; i < events.length; i++) {
          const event = events[i]
    
          if (event.Items.length > 0 && event.Items[0].Items.length == 3) {
            const obj = {
              bookmaker: 'sportaza',
              Team1: event.Items[0].Items[0].Name,
              Team2: event.Items[0].Items[2].Name,
              Odds_win1: event.Items[0].Items[0].Price,
              Odds_draw: event.Items[0].Items[1].Price,
              Odds_win2: event.Items[0].Items[2].Price,
              gameDate: event.EventDate
            }   
            temp.push(obj)
          }
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