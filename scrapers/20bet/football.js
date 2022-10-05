const dataService = require('../../services/getData')

const footballScraper = async (links, temp) => {
  try {
    const leagueData = await  dataService.getJsonAxios(links.leagues)
    const leagues = leagueData.data.leagues
    const leagueIds = []

    for (let m = 0; m < leagues.length; m++) {
      if (leagues[m].sport_id == 1) {
        leagueIds.push(leagues[m].id)
      }
    }

    for (let i = 0; i < leagueIds.length; i++) {
      const link = `${links.base_url}${leagueIds[i]}${links.base_url2}`
      await matches(link, temp)
    }

  } catch (err) {
    console.log(err)
  }
}

const matches = async (link, temp) => {
  try {
    const resp = await dataService.getJsonAxios(link)
    let items = resp.data.items
    let parsedItems = []

    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        parsedItems.push({
          id: items[i].id,
          team1: items[i].competitor1Id,
          team2: items[i].competitor2Id,
          date: items[i].time
        })
      }

      let competitors = resp.data.relations.competitors
      let odds = resp.data.relations.odds

      if (competitors.length > 0) {
        for (i = 0; i < parsedItems.length; i++) {
          let team1 = parsedItems[i].team1
          let team2 = parsedItems[i].team2
          let id = parsedItems[i].id
          let date = parsedItems[i].date

          if (odds[id] && odds[id].length > 0) {

            let win = -1
            let draw = -1
            let win2 = -1
            
            for (let j = 0; j < odds[id].length; j++) {
              if (odds[id][j].vendorMarketId == 1) {
                if (odds[id][j].outcomes.length == 3) {
                  win = odds[id][j].outcomes[0].odds
                  draw = odds[id][j].outcomes[1].odds
                  win2 = odds[id][j].outcomes[2].odds
                  break
                }
              }
            }

            for (let k = 0; k < competitors.length; k++) {
              if (team1 == competitors[k].id) {
                parsedItems[i].team1 = competitors[k].name
              }
              if (team2 == competitors[k].id) {
                parsedItems[i].team2 = competitors[k].name
              }
            }

            if (win != -1 && draw != -1 && win2 != -1) {
              temp.push({
                bookmaker: '20bet',
                Team1: parsedItems[i].team1,
                Team2: parsedItems[i].team2,
                Odds_win1: win,
                Odds_draw: draw,
                Odds_win2: win2,
                gameDate: date
              })
            }
          }
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