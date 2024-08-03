'use strict'

// task - 1
const numberOfSeries = +prompt('Nechta serial ko\'rdingiz?', '')

// task - 2
const seriesDB = {
    'count': numberOfSeries,
    'series': {},
    'actors': {},
    'genres': [],
    'private': false,
}

// task - 3
const a = prompt('Oxirgi ko\'rgan serialingiz ?')
const b = prompt('Nechi baxo berasiz')
const c = prompt('Oxirgi ko\'rgan serialingiz ?')
const d = prompt('Nechi baxo berasiz')

seriesDB.series[a] = b
seriesDB.series[c] = d

console.log(seriesDB)
