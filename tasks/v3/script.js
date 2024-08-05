'use strict';

let numberOfSeries;

function startApp() {
    numberOfSeries = +prompt("Nechta serial ko'rdingiz ?", '');

    while (numberOfSeries === '' || numberOfSeries == null || isNaN(numberOfSeries)) {
        numberOfSeries = +prompt("Nechta serial ko'rdingiz ?", '');
    }
}

startApp();

const seriesDB = {
    'count': numberOfSeries,
    'series': {},
    'actors': {},
    'genres': [],
    'private': false
}

function rememberMySeries() {
    for (let i = 0; i < 2; i++) {
        const name = prompt("Oxirgi ko'rgan serialingiz ?");
        const score = prompt('Nechi baxo berasiz ?');
        if (name != null && score != null && name !== '' && score !== '') {
            seriesDB.series[name] = score;
            console.log('Done');
        } else {
            console.log('Error')
            i--;
        }
    }
}

rememberMySeries();

function detectLevelViewer() {
    if (seriesDB.count < 5) {
        console.log("Kam serial ko'ripsiz");
    } else if (5 <= seriesDB.count <= 10) {
        console.log("Siz klassik tomoshabin ekansiz");
    } else {
        console.log("Siz serialchi zvezda ekansiz");
    }
}

detectLevelViewer();

function showDB(hidden) {
    if (!hidden) {
        console.log(seriesDB);
    } else {
        console.log('Information is private!')
    }
}

function writeGenres() {
    for (let i = 0; i < 3; i++) {
        seriesDB.genres[i] = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`);
    }
}

writeGenres();

showDB(seriesDB.private);
