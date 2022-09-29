const TelegramBot = require('node-telegram-bot-api')

const send = async (data) => {
  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true })


  for (let i = 0; i < data.length; i++) {
    var today = new Date()
    var eventDate = new Date(data[i].Date)

    if (today > eventDate) {
      eventDate = 'Now'
    } else {
      eventDate = eventDate.toLocaleString()
    }

    const message = `
    Arbitrage found!
    - Profit: ${Math.round((1 - data[i].Percent) * 100)}%
    - Match: ${data[i].Match}
    - Books: ${data[i].Books}
    - Odds: ${data[i].Odds}
    - Date: ${eventDate}
    `

   await bot.sendMessage(process.env.CHAT_ID, message)
  }

  

  process.exit()
}

module.exports = {
  send
} 