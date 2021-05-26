import { teams } from './dummyData.js';

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
        const stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
        stylesheet.setAttribute('integrity', 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm');
        stylesheet.setAttribute('crossorigin', 'anonymous');

        const table = document.createElement('table');
        table.setAttribute('class', 'table');

        const thead = document.createElement('thead');
        const headRow = document.createElement('tr');

        for(let i = 0; i < 8; i++) {
            const th = document.createElement('th');
            th.setAttribute('scope', 'col');
            th.innerText = this.columnHeadings[i];
            headRow.appendChild(th);
        } 

        const tbody = document.createElement('tbody');

        for(const team of teams) {
            const bodyRow = document.createElement('tr');
            for (const property in team) {
                console.log(property);
                const td = document.createElement('td');
                td.innerText = team[property];

                if(property === 'teamName') {
                    td.setAttribute('class', 'team-name');
                }
                
                bodyRow.appendChild(td);
            }
            tbody.appendChild(bodyRow);
        }

        thead.appendChild(headRow);
        table.appendChild(thead);
        table.appendChild(tbody);

        shadow.append(stylesheet);
        shadow.append(table);
    }
}

customElements.define('leaderboard-table', LeaderboardTable);