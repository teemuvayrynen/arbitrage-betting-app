const fs = require('fs')
const parseLinks = require('./functions/parseLinks')

const run = async () => {
  fs.writeFileSync('matches.json', JSON.stringify([]))

  await parseLinks.parseFootball()


}



run()