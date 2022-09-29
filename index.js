const fs = require('fs')
const parseLinks = require('./functions/parseLinks')
const message = require('./functions/message')
require('dotenv').config()

const run = async () => {
  //fs.writeFileSync('matches.json', JSON.stringify([]))

  const data = await parseLinks.parseFootball()

  message.send(data)

}



run()