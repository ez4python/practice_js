'use strict'


const numberOfSeries = +prompt("Nechta serial ko'rdingiz ?");

const seriesDB = {
    'count': numberOfSeries, 'series': {}, 'actors': {}, 'genres': [], 'private': false
}

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

// let i = 0;
// while (i < 2) {
//     // ...
//     i++;
// }
//
// do {
//     // ...
//     i++;
// } while (i < 2)

// if (seriesDB.count < 5) {
//     console.log("Kam serial ko'ripsiz");
// } else if (5 <= seriesDB.count <= 10) {
//     console.log("Siz klassik tomoshabin ekansiz");
// } else {
//     console.log("Siz serialchi zvezda ekansiz");
// }

console.log(seriesDB)
