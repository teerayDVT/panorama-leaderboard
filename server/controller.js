const { createResult } = require('./create-result');
const { addTeam } = require('./add-team');
const { getLeaderboardData } = require('./get-leaderboard');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json(), cors());

app.post("/submit-result", (req, res) => {
    console.log(req.body);
    createResult(req.body).catch(console.dir);
    res.send("Result submitted successfully");
})

app.post("/add-team", (req, res) => {
    console.log(req.body);
    addTeam(req.body).catch(console.dir);
    res.send("Team added successfully");
})

app.get("/leaderboard", (req, res) => {
    getLeaderboardData().then(data => {
        res.send(data);
    });
    
    // res.send(getLeaderboardData());
})

app.listen(port, () => {
    console.log("Server listening on port: " + port);
})