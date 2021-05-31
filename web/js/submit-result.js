import { teams } from './dummyData.js';

const submitBtn = document.getElementById('submit-result');
submitBtn.addEventListener('click', submitResult);

function submitResult() {
    const winnerOutput = document.getElementById('show-winner');
    if (checkTeamsExist()) {
        const winner = checkGoals();
        winnerOutput.innerHTML = winner;
    } else alert("One or more of these teams do not exist.");

}

function checkGoals() {
    const team1Goals = document.getElementById('team-1-goals-scored').value;
    const team2Goals = document.getElementById('team-2-goals-scored').value;

    if (team1Goals === team2Goals) {
        return "The match was a draw";
    }

    return ((team1Goals > team2Goals) ? "Team 1 was the winner!" :  "Team 2 was the winner!");
}

function checkTeamsExist() {
    const team1Name = document.getElementById('team-1-name').value;
    const team2Name = document.getElementById('team-2-name').value;
    let team1Exists = false;
    let team2Exists = false;

    for (let team of teams) {
        if (team1Exists && team2Exists) {
            break;
        }

        team1Exists = ((team1Exists) || team?.teamName.localeCompare(team1Name) === 0) ? true : false;
        team2Exists = ((team2Exists) || team?.teamName.localeCompare(team2Name) === 0) ? true : false;
    }
    return (team1Exists && team2Exists);
}