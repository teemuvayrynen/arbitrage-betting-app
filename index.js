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

    fs.writeFileSync('matches.json', JSON.stringify([]))
    const data = await parseLinks.parseFootball()
    message.send(data, bot, amount)

    setInterval(() => {
      (async () => {
        fs.writeFileSync('matches.json', JSON.stringify([]))
        const data = await parseLinks.parseFootball()
        message.send(data, bot, amount)
      })()},1800000)
    

  } catch (err) {
    bot.sendMessage(process.env.CHAT_ID, err.code)
  }

}

run()

// const service = require('./services/getData')

// const test = async () => {
//   const resp = await service.getJsonAxios('https://sb2frontend-altenar2.biahosted.com/api/Sportsbook/GetEvents?timezoneOffset=-180&langId=63&skinName=sportaza&configId=26&culture=fi-FI&countryCode=FI&deviceType=Desktop&numformat=en&integration=sportaza&sportids=0&categoryids=0&champids=2941%2C3111%2C3049%2C2973%2C3763%2C3322%2C32613%2C34871%2C3390%2C3433%2C3361%2C3316%2C3484%2C3317%2C3434%2C3431%2C3318%2C3520%2C3432%2C3430&group=AllEvents&period=periodall&withLive=false&outrightsDisplay=none&marketTypeIds=&couponType=0&startDate=2022-10-01T17%3A41%3A00.000Z&endDate=2022-10-08T17%3A41%3A00.000Z')
//   console.log(resp)
// }

// test()