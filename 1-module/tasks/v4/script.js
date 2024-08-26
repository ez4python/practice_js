'use strict'

const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        seriesDB.count = +prompt("Nechta serial ko'rdingiz ?", '')

        while (seriesDB.count === '' || seriesDB.count == null || isNaN(seriesDB.count)) {
            seriesDB.count = +prompt("Nechta serial ko'rdingiz ?", '')
        }
    },
    rememberMySeries: function () {
        for (let i = 0; i < 2; i++) {
            const name = prompt("Oxirgi ko'rgan serialingiz ?")
            const score = prompt('Nechi baxo berasiz ?')
            if (name != null && score != null && name !== '' && score !== '') {
                seriesDB.series[name] = score
                console.log('Done')
            } else {
                console.log('Error')
                i--
            }
        }
    },
    detectLevelView: function () {
        if (seriesDB.count < 5) {
            console.log("Kam serial ko'ripsiz")
        } else if (5 <= seriesDB.count <= 10) {
            console.log("Siz klassik tomoshabin ekansiz")
        } else {
            console.log("Siz serialchi zvezda ekansiz")
        }
    },
    showDB: function () {
        if (!seriesDB.private) {
            console.log(seriesDB)
        } else {
            console.log('Information is private!')
        }
    },
    visibleDB: function () {
        seriesDB.private = !seriesDB.private
    },
    writeGenres: function () {
        // way-1
        // let i = 0
        // while (i < 3) {
        //     const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`)
        //     if (genre === '' || genre === null) {
        //         console.log("Siz notug'ri ma'lumot kiritdingiz")
        //         i--
        //     } else {
        //         seriesDB.genres[i] = genre
        //     }
        //     i++
        // }

        // way-2
        let genres = prompt("Yaxshi ko'rgan janrlaringizni vergul yordamida yozing").toLowerCase()
        if (genres === '' || genres === null) {
            console.log("Siz notug'ri ma'lumot kiritdingiz")
        } else {
            seriesDB.genres = genres.split(', ').sort()
        }

        seriesDB.genres.forEach((item, idx) => {
            console.log(`Yaxshi ko'rgan janringiz #${idx + 1} - nomi ${item}`)
        })
    }
}
