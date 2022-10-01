const odds = require('./odds')

const send = async (data, bot, amount) => {
  try {
    if (data.length > 0) { 
      for (let i = 0; i < data.length; i++) {
        var today = new Date()
        var eventDate = new Date(data[i].Date)

        if (eventDate > today) {
          const stakes = odds.calculateProfit(amount, data[i].Odds, data[i].Percent)
  
          const message = `
          Arbitrage found!
          - Profit: ${Math.round((1 - data[i].Percent) * 100)}%
          - Match: ${data[i].Match}
          - Books: ${data[i].Books}
          - Odds: ${data[i].Odds.win} | ${data[i].Odds.draw} | ${data[i].Odds.win2}
          - Stakes[${amount}]: ${stakes}
          - Date: ${eventDate.toLocaleString()}
          `
    
          bot.sendMessage(process.env.CHAT_ID, message)
        }
      }
    }
  } catch (err) {
    bot.sendMessage(process.env.CHAT_ID, err.code)
  }
}

module.exports = {
  send
} 