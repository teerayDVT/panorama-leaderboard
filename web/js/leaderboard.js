export class Leaderboard {

    constructor(team) {
        this.position = team.position;
        this.teamName = team.teamName;
        this.played = team.played;
        this.won = team.won;
        this.drawn = team.drawn;
        this.lost = team.lost;
        this.goalDifference = team.goalDifference;
        this.points = team.points;
    }
}