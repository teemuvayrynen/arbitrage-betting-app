const dataService = require('../../services/getData')

const footballScrape = async () => {
  try {
    const data = dataService.getJsonData('https://www.unibet.com/sportsbook-feeds/views/filter/football/argentina/all/matches?includeParticipants=true&useCombined=true&ncid=1664099359')

    console.log(JSON.stringify(data))

  } catch (err) {
    console.log(err)
  }
  
}

module.exports = {
  footballScrape
}