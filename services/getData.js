const { execSync } = require('child_process')


const getJsonData = (link) => {
  const output = execSync(`curl '${link}' -H 'pragma: no-cache' -H 'dnt: 1' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.8' -H 'upgrade-insecure-requests: 1' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36' -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' -H 'cache-control: no-cache' -H 'authority: www.appannie.com' --compressed`)
  const json = JSON.parse(output)

  return json
}

module.exports = {
  getJsonData
}