class LeaderboardTable extends HTMLElement {
    constructor() {
        super();

        this.getLeaderboardData().then((teams) => {
            let shadow = this.attachShadow({mode: 'open'});
            this.appendStyleSheet(shadow);
            this.appendTable(shadow, teams);
        });
    }

    appendStyleSheet(shadow) {
        const stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', '/web/js/custom-elements/leaderboard-table/leaderboard-table.css');

        shadow.append(stylesheet);
    }

    appendTable(shadow, teams) {
        const table = document.createElement('table');

        this.appendHeader(table);
        this.appendBody(table, teams);

        shadow.append(table);
    }

    appendHeader(table) {
        const header = document.createElement('thead');
        const row = document.createElement('tr');
        const columnHeadings = [
            "#", "Team", "Played", "Won", "Drawn", "Lost", "GD", "Points"
        ];

        for (let i = 0; i < 8; i++) {
            const heading = document.createElement('th');
            heading.innerText = columnHeadings[i];
            row.appendChild(heading);
        }

        header.append(row);
        table.append(header);
    }

    appendBody(table, teams) {
        const body = document.createElement('tbody');
        console.log(teams);
        let position = 1;
        for (const team of teams) {
            const row = document.createElement('tr');
            for (const property in team) {
                const data = document.createElement('td');
                if (property === "_id") {
                    data.innerText = position;
                    position++;
                } else {
                    data.innerText = team[property];
                }
                row.appendChild(data);
            }
            body.appendChild(row);
        }
        table.appendChild(body);
    }

    async getLeaderboardData() {
        let teams = await fetch("http://localhost:5000/leaderboard", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            return res.json();
        }).then(data => {
            return data;
        });

        return teams;
    }
}

customElements.define('leaderboard-table', LeaderboardTable);