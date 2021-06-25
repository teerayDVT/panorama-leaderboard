import { teams } from './dummyData.js';

const submitBtn = document.getElementById('submit-result');
submitBtn.addEventListener('click', submitResult);

function submitResult() {
    const teamsExist = checkTeamsExist();
    const winner = checkGoals();
    const winnerOutput = document.getElementById('show-winner');
    winnerOutput.innerHTML = winner;
}

function checkGoals() {
    const team1Goals = document.getElementById('team-1-goals-scored').value;
    const team2Goals = document.getElementById('team-2-goals-scored').value;

    if(team1Goals > team2Goals) {
        console.log('came here');
        return "Team 1 was the winner!";
    } else if (team2Goals > team1Goals) {
        return "Team 2 was the winner!";
    } else return "The match was a draw";
}

function checkTeamsExist() {
    const team1Name = document.getElementById('team-1-name').value;
    const team2Name = document.getElementById('team-2-name').value;
    let team1Exists = false;
    let team2Exists = false;
    for (let team of teams) {
        if (team['teamName'] === team1Name) {
            team1Exists = true;
        }
        if (team['teamName'] === team2Name) {
            team2Exists = true;
        }
    }
    console.log (team1Exists);
    console.log (team2Exists);
    return (team1Exists && team2Exists);
}