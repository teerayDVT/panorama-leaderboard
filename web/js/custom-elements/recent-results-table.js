import { results } from '../dummyData.js';

class RecentResultsTable extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});

        const stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
        stylesheet.setAttribute('integrity', 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm');
        stylesheet.setAttribute('crossorigin', 'anonymous');

        const table = document.createElement('table');
        table.setAttribute('class', 'table');

        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        for (let result of results) {
            let tr = document.createElement('tr');
            for (let property in result) {
                let td = document.createElement('td');
                if(property === 'date') {
                    const row = document.createElement('tr');
                    const th = document.createElement('th');
                    th.style.borderStyle = 'none';

                    console.log(result[property]);
                    let date = result[property];
                    console.log(date.getDay());
                    let day = getDay(date);
                    let month = date.getMonth();
                    let year = date.getFullYear();
                    th.innerText = day + ' ' + month + ' ' + year;
                    row.append(th);
                    tbody.append(row);
                    console.log(table);
                } else {
                    td.innerText = result[property];
                    tr.append(td);
                    tbody.append(tr);
                }
            }
        }

        table.append(tbody);

        shadow.append(stylesheet);
        shadow.append(table);
    }
}

function getDay(date) {
    var day = '';
    switch(date.getDay()) {
        case 0:
        day = 'Sunday';
        break;
        case 1:
        day = 'Monday';
        break;
        case 2:
        day = 'Tuesday';
        break;
        case 3:
        day = 'Wednesday';
        break;
        case 4:
        day = 'Thursday';
        break;
        case 5:
        day = 'Friday';
        break;
        case 6:
        day = 'Saturday';
        break;
        default:
    }
    return day;
}

customElements.define('recent-results-table', RecentResultsTable);