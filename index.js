const express = require('express')
const request = require('request');
const cors = require('cors');
const app = express()
app.use(cors())
const port = 3000
app.get('/*', cors(),(req, res) => {
    request({
        headers: {"Content-Type": "application/x-www-form-urlencoded",
                   "authorization":req.headers.authorization },
        url:"https://7rgjp2dm.api.commercecloud.salesforce.com"+req.url},function(error,response,body){
        res.send({error,response})
    })
})
var querystring = require('querystring');
app.post('/*', cors(),(req, res) => {
    config={
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        uri: "https://7rgjp2dm.api.commercecloud.salesforce.com"+req.url,
        body: req.body,
        method: 'POST'
      }
    request(config
        ,function(error,response,body){
        res.send({error,response,body})
    })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
