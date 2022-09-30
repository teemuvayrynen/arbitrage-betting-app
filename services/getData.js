const { execSync } = require('child_process')


const getJsonData = (link) => {
  const output = execSync(`curl "${link}"`)
  const json = JSON.parse(output)

  return json
}

module.exports = {
  getJsonData
}