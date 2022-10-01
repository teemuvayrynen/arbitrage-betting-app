const fs = require('fs')
const difflib = require('difflib')

const create = () => {
  const data = JSON.parse(fs.readFileSync('matches.json'))
  let temp = []
  const matches = []

  for (let i = 0; i < data.length; i++) {
    const bookmaker = data[i]
    for (let j = 0; j < bookmaker.length; j++) {
      const event = bookmaker[j]
      temp = []

      if (i < data.length - 1 && data.length > 1) {
        for (let k = i + 1; k < data.length; k++) {
          for (let n = 0; n < data[k].length; n++) {
            const event2 = data[k][n]
  
            const team1 = new difflib.SequenceMatcher(null, event.Team1, event2.Team1)
            const team2 = new difflib.SequenceMatcher(null, event.Team2, event2.Team2)
  
            if (team1.ratio() > 0.95 && team2.ratio() > 0.95) {
              temp.push(event2)
              data[k].splice(n, 1)
              break
            }
          }
        }
      }

      temp.push(event)
      matches.push(temp)
    }
  }

  console.log('Subarrays done')
  return matches
}


module.exports = {
  create
}