const express = require("express");
require("actions-on-google")
require('dotenv').config();
const axios = require('axios');
const { WebhookClient } = require("dialogflow-fulfillment");
const app = express();
const fetch = require('node-fetch');
const banana = require('@banana-dev/banana-dev');

app.get('/', (req,res) => {
    res.send('Welcome to Dialogflow-GPTJ2 Application!!');
  })

app.post("/dialogflow", express.json(), (req, res) => {
const agent = new WebhookClient({ request: req, response: res });
let intentMap = new Map();
intentMap.set("Default Welcome Intent", welcome);
intentMap.set("Default Fallback Intent", defaultFallback);
agent.handleRequest(intentMap);

function welcome(agent) {
    agent.add('Hi, I am Debra! I am your virtual personal assistant from Orient Telecoms. How are you doing today?');
}

async function defaultFallback(agent) {
    let query = agent.query;
    console.log('querytext: ', query)
    var modelKey = "gptj"

    const modelParameters = {
        "text":query,
        "length":50,
        "temperature":0.9,
        "batchSize": 1
    }

    try {
        let run = async (modelParameters) => {
            var botResponse = await banana.run(process.env.apiKey, modelKey, modelParameters)
            
            console.log('botResponse: ', botResponse)
            agent.add(botResponse)
        }
    } catch (err) {
        console.log('This is error:', err);
        agent.add('Sorry. Something went wrong. Can you say that again?');
    }
}
});

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`))
