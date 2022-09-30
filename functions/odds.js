const calculate = (data) => {
  const calculatedOdds = []

  for (let i = 0; i < data.length; i++) {
    const event = data[i]

    if (event.length > 1) {
      for (let j = 0; j < event.length - 1; j++) {
        oneItem(event[j], calculatedOdds)

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
              Odds: {
                win: win,
                draw: draw,
                win2: team2_win2
              },
              Date: event[j].gameDate,
              Percent: percent
            }

            calculatedOdds.push(obj)
          }

          percent = (1 / win) + (1 / team2_draw) + (1 / win2)
          if (percent < 1) {
            obj = {
              Match: `${event[j].Team1} vs ${event[j].Team2}`,
              Books: `${event[j].bookmaker} | ${event[k].bookmaker} | ${event[j].bookmaker}`,
              Odds: {
                win: win,
                draw: team2_draw,
                win2: win2
              },
              Date: event[j].gameDate,
              Percent: percent
            }
            calculatedOdds.push(obj)
          }

          percent = (1 / team2_win) + (1 / draw) + (1 / win2)
          if (percent < 1) {
            obj = {
              Match: `${event[j].Team1} vs ${event[j].Team2}`,
              Books: `${event[k].bookmaker} | ${event[j].bookmaker} | ${event[j].bookmaker}`,
              Odds: {
                win: team2_win,
                draw: draw,
                win2: win2
              },
              Date: event[j].gameDate,
              Percent: percent
            }
            calculatedOdds.push(obj)
          }

          percent = (1 / team2_win) + (1 / team2_draw) + (1 / win2)
          if (percent < 1) {
            obj = {
              Match: `${event[j].Team1} vs ${event[j].Team2}`,
              Books: `${event[k].bookmaker} | ${event[k].bookmaker} | ${event[j].bookmaker}`,
              Odds: {
                win: team2_win,
                draw: team2_draw,
                win2: win2
              },
              Date: event[j].gameDate,
              Percent: percent
            }
            calculatedOdds.push(obj)
          }

          percent = (1 / team2_win) + (1 / draw) + (1 / team2_win2)
          if (percent < 1) {
            obj = {
              Match: `${event[j].Team1} vs ${event[j].Team2}`,
              Books: `${event[k].bookmaker} | ${event[j].bookmaker} | ${event[k].bookmaker}`,
              Odds: {
                win: team2_win,
                draw: draw,
                win2: team2_win2
              },
              Date: event[j].gameDate,
              Percent: percent
            }
            calculatedOdds.push(obj)
          }

          percent = (1 / win) + (1 / team2_draw) + (1 / team2_win2)
          if (percent < 1) {
            obj = {
              Match: `${event[j].Team1} vs ${event[j].Team2}`,
              Books: `${event[j].bookmaker} | ${event[k].bookmaker} | ${event[k].bookmaker}`,
              Odds: {
                win: win,
                draw: team2_draw,
                win2: team2_win2
              },
              Date: event[j].gameDate,
              Percent: percent
            }
            calculatedOdds.push(obj)
          }
        }
      }
    } else {
      oneItem(event[0], calculatedOdds)
    }
  }

  return calculatedOdds
}


const oneItem = (event, calculatedOdds) => {
  const win = event.Odds_win1 ? event.Odds_win1 : 0
  const draw = event.Odds_draw ? event.Odds_draw : 0
  const win2 = event.Odds_win2 ? event.Odds_win2 : 0

  if (win != 0 && draw != 0 && win2 != 0) {
    const percent = (1 / win) + (1 / draw) + (1 / win2)
    
    if (percent < 1) {
      obj = {
        Match: `${event.Team1} vs ${event.Team2}`,
        Books: `${event.bookmaker} | ${event.bookmaker} | ${event.bookmaker}`,
        Odds: `${win} | ${draw} | ${win2}`,
        Date: event.gameDate,
        Percent: percent
      }

      calculatedOdds.push(obj)
    }
  }
}

const calculateProfit = (amount, odds, percent) => {
  const win = amount / (percent * odds.win)
  const draw = amount / (percent * odds.draw)
  const win2 = amount / (percent * odds.win2)

  return `${win.toFixed(1)} | ${draw.toFixed(1)} | ${win2.toFixed(1)}`
}

module.exports = {
  calculate,
  calculateProfit
}