import { teams } from '../../dummyData.js';

class LeaderboardTable extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});
        /* CREATING ELEMENT USING HTML
        shadow.innerHTML = `
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Team</th>
                        <th scope="col">Played</th>
                        <th scope="col">Won</th>
                        <th scope="col">Drawn</th>
                        <th scope="col">Lost</th>
                        <th scope="col">GD</th>
                        <th scope="col">Points</th>
                    </tr>
                </thead>
            </table>
        `;*/

        /* CREATING ELEMENT USING JS */
        this.columnHeadings = [
            "#", "Team", "Played", "Won", "Drawn", "Lost", "GD", "Points"
        ];

        this.appendStyleSheet(shadow);
        this.appendTable(shadow);
    }

    appendStyleSheet(shadow) {
        const stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', '/js/custom-elements/leaderboard-table/leaderboard-table.css');

        shadow.append(stylesheet);
    }

    appendTable(shadow) {
        const table = document.createElement('table');

        this.appendHeader(table);
        this.appendBody(table);

        shadow.append(table);
    }

    appendHeader(table) {
        const header = document.createElement('thead');
        const row = document.createElement('tr');

        for (let i = 0; i < 8; i++) {
            const heading = document.createElement('th');
            heading.innerText = this.columnHeadings[i];
            row.appendChild(heading);
        }

        header.append(row);
        table.append(header);
    }

    appendBody(table) {
        const body = document.createElement('tbody');

        for (const team of teams) {
            const row = document.createElement('tr');
            for (const property in team) {
                const data = document.createElement('td');
                data.innerText = team[property];

                row.appendChild(data);
            }
            body.appendChild(row);
        }
        table.appendChild(body);
    }
}

customElements.define('leaderboard-table', LeaderboardTable);