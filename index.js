const fs = require('fs')
const parseLinks = require('./functions/parseLinks')
const message = require('./functions/message')
require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')

const run = async () => {
  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true })
  

  //message.send(data)

  bot.on('message', (msg) => {
  
    bot.sendMessage(process.env.CHAT_ID, 'Received your message');
  });


  setInterval(() => {
    (async () => {
      fs.writeFileSync('matches.json', JSON.stringify([]))
      const data = await parseLinks.parseFootball()

      console.log(data)
      

    })()},60000)




}



run()