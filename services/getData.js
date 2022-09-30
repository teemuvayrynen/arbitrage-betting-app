const { execSync } = require('child_process')
const axios = require('axios')


const getJsonData = (link) => {
  const output = execSync(`curl "${link}" -H 'pragma: no-cache' -H 'dnt: 1' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.8' -H 'upgrade-insecure-requests: 1' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36' -H 'accept: text/html,application/xhtml+xml,application/json,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' -H 'cache-control: no-cache' --compressed`)
  const json = JSON.parse(output)

  return json
}

const getJsonAxios = async (link) => {
  const output = await axios.get(link)

  return output.data
}

module.exports = {
  getJsonData,
  getJsonAxios
}