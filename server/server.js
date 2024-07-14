
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

// TODO: Add DB connection and check for retreived URL before running ^function^
// TODO-2: Reach out and touch someone, a.k.a. make a computer at someone elses house use the retreived data to generate highly personal documents about moi xoxo
// TODO-3: Use aforementioned DB connection to save URL and returned data from OAI
// TODO-4: hide the evidence and rapidly look left-right-left-right reeaallllll shifty-like... yeah... yeah. Taht's da ticket. 
// TODO-??? whistle innocently guys BE COOL GUYS BE COOL
app.get('/url', (req, res) => {
  let url = req.params.target;


  res.send(`Fetched data from ${url}`)
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})
