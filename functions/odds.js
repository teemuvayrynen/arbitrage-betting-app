const calculate = (data) => {
  const calculatedOdds = []

  for (let i = 0; i < data.length; i++) {
    const events = data[i]

    if (events.length > 1) {
      for (let j = 0; j < events.length - 2; j++) {
        const win = events[j].Odds_win1
        const draw = events[j].Odds_draw
        const win2 = events[j].Odds_win2
        oneItem(events[j], calculatedOdds)

        if (events.length > 1) {
          for (let k = j + 1; k < events.length - 1; k++) {
            const book2_win = events[k].Odds_win1
            const book2_draw = events[k].Odds_draw
            const book2_win2 = events[k].Odds_win2
            oneItem(events[k], calculatedOdds)

            let percent

            if (win != 0 && draw != 0 && win2 != 0 && book2_win != 0 && book2_draw != 0 && book2_win2 != 0) {
              percent = (1 / win) + (1 / draw) + (1 / book2_win2)
              if (percent < 1) {
                calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, win, draw, 
                  book2_win2, events[j].gameDate, percent, events[j].bookmaker, events[j].bookmaker, events[k].bookmaker))
              }

              percent = (1 / win) + (1 / book2_draw) + (1 / win2)
              if (percent < 1) {
                calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, win, book2_draw, 
                  win2, events[j].gameDate, percent, events[j].bookmaker, events[k].bookmaker, events[j].bookmaker))
              }

              percent = (1 / book2_win) + (1 / draw) + (1 / win2)
              if (percent < 1) {
                calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, book2_win, draw, 
                  win2, events[j].gameDate, percent, events[k].bookmaker, events[j].bookmaker, events[j].bookmaker))
              }

              percent = (1 / book2_win) + (1 / book2_draw) + (1 / win2)
              if (percent < 1) {
                calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, book2_win, book2_draw, 
                  win2, events[j].gameDate, percent, events[k].bookmaker, events[k].bookmaker, events[j].bookmaker))
              }

              percent = (1 / book2_win) + (1 / draw) + (1 / book2_win2)
              if (percent < 1) {
                calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, book2_win, draw, 
                  book2_win2, events[j].gameDate, percent, events[k].bookmaker, events[j].bookmaker, events[k].bookmaker))
              }

              percent = (1 / win) + (1 / book2_draw) + (1 / book2_win2)
              if (percent < 1) {
                calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, win, book2_draw, 
                  book2_win2, events[j].gameDate, percent, events[j].bookmaker, events[k].bookmaker, events[k].bookmaker))
              }
            }

            if (events.length > 2) {
              for (let n = k + 1; n < events.length; n++) {
                const book3_win = events[n].Odds_win1
                const book3_draw = events[n].Odds_draw
                const book3_win2 = events[n].Odds_win2
                oneItem(events[n], calculatedOdds)
    
                if (win != 0 && draw != 0 && win2 != 0 && book3_win != 0 && book3_draw != 0 && book3_win2 != 0) {
                  percent = (1 / win) + (1 / draw) + (1 / book3_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, win, draw, 
                      book3_win2, events[j].gameDate, percent, events[j].bookmaker, events[j].bookmaker, events[n].bookmaker))
                  }
    
                  percent = (1 / win) + (1 / book3_draw) + (1 / win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, win, book3_draw, 
                      win2, events[j].gameDate, percent, events[j].bookmaker, events[n].bookmaker, events[j].bookmaker))
                  }
    
                  percent = (1 / book3_win) + (1 / draw) + (1 / win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, book3_win, draw, 
                      win2, events[j].gameDate, percent, events[n].bookmaker, events[j].bookmaker, events[j].bookmaker))
                  }
    
                  percent = (1 / book3_win) + (1 / book3_draw) + (1 / win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, book3_win, book3_draw, 
                      win2, events[j].gameDate, percent, events[n].bookmaker, events[n].bookmaker, events[j].bookmaker))
                  }
    
                  percent = (1 / book3_win) + (1 / draw) + (1 / book3_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, book3_win, draw, 
                      book3_win2, events[j].gameDate, percent, events[n].bookmaker, events[j].bookmaker, events[n].bookmaker))
                  }
    
                  percent = (1 / win) + (1 / book3_draw) + (1 / book3_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, win, book3_draw, 
                      book3_win2, events[j].gameDate, percent, events[j].bookmaker, events[n].bookmaker, events[n].bookmaker))
                  }
                }
    
                if (book2_win != 0 && book2_draw != 0 && book2_win2 != 0 && book3_win != 0 && book3_draw != 0 && book3_win2 != 0) {
                  percent = (1 / book2_win) + (1 / book2_draw) + (1 / book3_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[k].Team1, events[k].Team2, book2_win, book2_draw, 
                      book3_win2, events[k].gameDate, percent, events[k].bookmaker, events[k].bookmaker, events[n].bookmaker))
                  }
    
                  percent = (1 / book2_win) + (1 / book3_draw) + (1 / book2_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[k].Team1, events[k].Team2, book2_win, book3_draw, 
                      book2_win2, events[k].gameDate, percent, events[k].bookmaker, events[n].bookmaker, events[k].bookmaker))
                  }
    
                  percent = (1 / book3_win) + (1 / book2_draw) + (1 / book2_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[k].Team1, events[k].Team2, book3_win, book2_draw, 
                      book2_win2, events[k].gameDate, percent, events[n].bookmaker, events[k].bookmaker, events[k].bookmaker))
                  }
    
                  percent = (1 / book3_win) + (1 / book3_draw) + (1 / book2_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[k].Team1, events[k].Team2, book3_win, book3_draw, 
                      book2_win2, events[k].gameDate, percent, events[n].bookmaker, events[n].bookmaker, events[k].bookmaker))
                  }
    
                  percent = (1 / book3_win) + (1 / book2_draw) + (1 / book3_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[k].Team1, events[k].Team2, book3_win, book2_draw, 
                      book3_win2, events[k].gameDate, percent, events[n].bookmaker, events[k].bookmaker, events[n].bookmaker))
                  }
    
                  percent = (1 / book2_win) + (1 / book3_draw) + (1 / book3_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[k].Team1, events[k].Team2, book2_win, book3_draw, 
                      book3_win2, events[k].gameDate, percent, events[k].bookmaker, events[n].bookmaker, events[n].bookmaker))
                  }
                }
    
                if (win != 0 && draw != 0 && win2 != 0 && book2_win != 0 && book2_draw != 0 && book2_win2 != 0 && book3_win != 0 && book3_draw != 0 && book3_win2 != 0) {
                  percent = (1 / win) + (1 / book2_draw) + (1 / book3_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, win, book2_draw, 
                      book3_win2, events[j].gameDate, percent, events[j].bookmaker, events[k].bookmaker, events[n].bookmaker))
                  }
    
                  percent = (1 / win) + (1 / book3_draw) + (1 / book2_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, win, book3_draw, 
                      book2_win2, events[j].gameDate, percent, events[j].bookmaker, events[n].bookmaker, events[k].bookmaker))
                  }
    
                  percent = (1 / book2_win) + (1 / draw) + (1 / book3_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, book2_win, draw, 
                      book3_win2, events[j].gameDate, percent, events[k].bookmaker, events[j].bookmaker, events[n].bookmaker))
                  }
    
                  percent = (1 / book2_win) + (1 / book3_draw) + (1 / win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, book2_win, book3_draw, 
                      win2, events[j].gameDate, percent, events[k].bookmaker, events[n].bookmaker, events[j].bookmaker))
                  }
    
                  percent = (1 / book3_win) + (1 / draw) + (1 / book2_win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, book3_win, draw, 
                      book2_win2, events[j].gameDate, percent, events[n].bookmaker, events[j].bookmaker, events[k].bookmaker))
                  }
    
                  percent = (1 / book3_win) + (1 / book2_draw) + (1 / win2)
                  if (percent < 1) {
                    calculatedOdds.push(createObject(events[j].Team1, events[j].Team2, book3_win, book2_draw, 
                      win2, events[j].gameDate, percent, events[n].bookmaker, events[k].bookmaker, events[j].bookmaker))
                  }
                }
              }
            }            
          }
        }
      }
    } else {
      oneItem(events[0], calculatedOdds)
    }
  }

  console.log('Calculation done')

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
        Odds: {
          win: win,
          draw: draw,
          win2: win2
        },
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

const createObject = (team1, team2, win, draw, win2, date, percent, bookmaker1, bookmaker2, bookmaker3) => {
  return {
    Match: `${team1} vs ${team2}`,
    Books: `${bookmaker1} | ${bookmaker2} | ${bookmaker3}`,
    Odds: {
      win: win,
      draw: draw,
      win2: win2
    },
    Date: date,
    Percent: percent
  }
}

module.exports = {
  calculate,
  calculateProfit
}