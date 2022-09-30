const fs = require('fs')
const parseLinks = require('./functions/parseLinks')
const message = require('./functions/message')
require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')

const run = async () => {
  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true })
  try {
    const info = JSON.parse(fs.readFileSync('info.json'))
    let amount = info.amount
    
    bot.onText(/\/bet (.+)/, (msg, match) => {
      const resp = match[1]
      if (isNaN(resp)) {
        bot.sendMessage(process.env.CHAT_ID, 'Send number')
      } else {
        amount = resp
        fs.writeFileSync('info.json', JSON.stringify({...info, amount}))
        bot.sendMessage(process.env.CHAT_ID, `Success`);
      }
    });

    bot.onText(/\/getbet/, (msg, match) => {
      bot.sendMessage(process.env.CHAT_ID, amount);
    });


    setInterval(() => {
      (async () => {
        fs.writeFileSync('matches.json', JSON.stringify([]))
        const data = await parseLinks.parseFootball()
        message.send(data, bot, amount)
      })()},1200000)

  } catch (err) {
    bot.sendMessage(process.env.CHAT_ID, err.code)
  }
}



run()