import { Leaderboard } from './leaderboard.js';

var teams = [
    {
        position: 1,
        teamName: "Skop n Dop",
        played: 17,
        won: 22,
        drawn: 0,
        lost: 0,
        goalDifference: 100,
        points: 66
    },
    {
        position: 18,
        team: "Team Red",
        played: 17,
        won: 5,
        drawn: 2,
        lost: 10,
        goalDifference: 100,
        points: 15
    },
    {
        position: 2,
        team: "Team Blue",
        played: 17,
        won: 15,
        drawn: 1,
        lost: 1,
        goalDifference: 100,
        points: 45
    }];

var leaderboard = new Leaderboard(teams[0]);

console.log(leaderboard.teamName);