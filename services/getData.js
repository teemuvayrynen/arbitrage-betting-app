const axios = require('axios')
const { curly } = require('node-libcurl')
const { execSync } = require('child_process')


const getJsonData = (link) => {
  const output = execSync(`curl -v ${link}`)
  const json = JSON.parse(output)

  return json
}

module.exports = {
  getJsonData
}