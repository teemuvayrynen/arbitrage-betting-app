const fs = require('fs')

const calculate = (data) => {
  let count = 0

  for (let i = 0; i < data.length; i++) {
    const event = data[i]

    if (event.length > 1) {
      for (let j = 0; j < event.length - 1; j++) {
        oneItem(event[j])

        const win = event[j].Odds_win1
        const draw = event[j].Odds_draw
        const win2 = event[j].Odds_win2

        for (let k = j + 1; k < event.length; k++) {
          const team2_win = event[k].Odds_win1
          const team2_draw = event[k].Odds_draw
          const team2_win2 = event[k].Odds_win2

          let obj

          let percent = (1 / win) + (1 / draw) + (1 / team2_win2)
          if (percent < 1) {
            obj = {
              Match: `${event[j].Team1} vs ${event[j].Team2}`,
              Books: `${event[j].bookmaker} | ${event[j].bookmaker} | ${event[k].bookmaker}`,
              Odds: `${win} | ${draw} | ${team2_win2}`,
              Date: event[j].gameDate
            }
            console.log(obj)
          }

          percent = (1 / win) + (1 / team2_draw) + (1 / win2)
          if (percent < 1) {
            obj = {
              Match: `${event[j].Team1} vs ${event[j].Team2}`,
              Books: `${event[j].bookmaker} | ${event[k].bookmaker} | ${event[j].bookmaker}`,
              Odds: `${win} | ${team2_draw} | ${win2}`,
              Date: event[j].gameDate
            }
            console.log(obj)
          }

          percent = (1 / team2_win) + (1 / draw) + (1 / win2)
          if (percent < 1) {
            obj = {
              Match: `${event[j].Team1} vs ${event[j].Team2}`,
              Books: `${event[k].bookmaker} | ${event[j].bookmaker} | ${event[j].bookmaker}`,
              Odds: `${team2_win} | ${draw} | ${win2}`,
              Date: event[j].gameDate
            }
            console.log(obj)
          }

          percent = (1 / team2_win) + (1 / team2_draw) + (1 / win2)
          if (percent < 1) {
            obj = {
              Match: `${event[j].Team1} vs ${event[j].Team2}`,
              Books: `${event[k].bookmaker} | ${event[k].bookmaker} | ${event[j].bookmaker}`,
              Odds: `${team2_win} | ${team2_draw} | ${win2}`,
              Date: event[j].gameDate
            }
            console.log(obj)
          }

          percent = (1 / team2_win) + (1 / draw) + (1 / team2_win2)
          if (percent < 1) {
            obj = {
              Match: `${event[j].Team1} vs ${event[j].Team2}`,
              Books: `${event[k].bookmaker} | ${event[j].bookmaker} | ${event[k].bookmaker}`,
              Odds: `${team2_win} | ${draw} | ${team2_win2}`,
              Date: event[j].gameDate
            }
            console.log(obj)
          }

          percent = (1 / win) + (1 / team2_draw) + (1 / team2_win2)
          if (percent < 1) {
            obj = {
              Match: `${event[j].Team1} vs ${event[j].Team2}`,
              Books: `${event[j].bookmaker} | ${event[k].bookmaker} | ${event[k].bookmaker}`,
              Odds: `${win} | ${team2_draw} | ${team2_win2}`,
              Date: event[j].gameDate
            }
            console.log(obj)
          }
          count += 6
        }
      }
    } else {
      oneItem(event[0])
    }
  }
  console.log(count)
}


const oneItem = (event) => {
  const win = event.Odds_win1 ? event.Odds_win1 : 0
  const draw = event.Odds_draw ? event.Odds_draw : 0
  const win2 = event.Odds_win2 ? event.Odds_win2 : 0

  if (win != 0 && draw != 0 && win2 != 0) {
    const percent = (1 / win) + (1 / draw) + (1 / win2)
    
    if (percent < 1) {
      console.log(percent)
    }
  }
}

module.exports = {
  calculate
}