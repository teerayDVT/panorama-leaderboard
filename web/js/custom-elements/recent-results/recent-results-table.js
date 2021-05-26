import { allResults } from './all-results-data.js';

class RecentResultsTable extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});

        const stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', '/js/custom-elements/recent-results/recent-results.css');

        for(let resultDate of allResults.dates) {
            console.log(resultDate);
            // this.createTableWithHeading(resultDate);
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            th.setAttribute('colspan', 6);
            th.innerText = resultDate.getDateString();

            tr.append(th);
            thead.append(tr);
            table.append(thead);
            const tbody = document.createElement('tbody');

            for(let result of resultDate.results) {
                const tr = document.createElement('tr');
                for (let property in result) {
                    const td = document.createElement('td');
                    if (property === "team2Goals") {
                        this.insertColon(tr);
                    }
                    td.innerText = result[property];
                    tr.append(td);
                    
                }
                tbody.append(tr);
            }
            table.append(tbody);
            shadow.append(table);
        }
        shadow.append(stylesheet);       
    }

    insertColon(tr) {
        const colon = document.createElement('td');
        colon.innerText = '-';
        tr.append(colon);
    }
}

customElements.define('recent-results-table', RecentResultsTable);