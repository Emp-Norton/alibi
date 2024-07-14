
const express = require('expess')
const fetch = require('node-fetch')

const app = express()

const PORT = 3001

async function retrieveDescription(url) {
  try {
    let response = await fetch(url);
    let body = await response.text();
    let details = body.match('styles__description');
  }
  catch(exception) {
    console.log(exception);
  }
}


app.get('/url', (req, res) => {
  let url = req.params.target;


  res.send(`Fetched data from ${url}`)
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})
