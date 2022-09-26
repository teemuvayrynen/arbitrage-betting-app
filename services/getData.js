const axios = require('axios')
const { curly } = require('node-libcurl')
const { execSync } = require('child_process')


const getJsonData = (link) => {
  console.log(link)
  const output = execSync(`curl "${link}"`)
  const json = JSON.parse(output)

  return json
}

module.exports = {
  getJsonData
}