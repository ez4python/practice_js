'use strict'


/*
-------TASKS-------
1. Reklama bloklarini o'chirish
2. "Drama" janrini -> "Komediya"ga o'zgaritiring
3. Orqa fonni o'zgratiring JavaScript yordamida
4. Seriallarni JavaScript dagi massiv yordamida ko'rsating
5. Xar bir serialni o'z nomeri bo'lsin
*/


// task-1
const promoAds = document.querySelectorAll('.promo__adv img')
promoAds.forEach(item => {
    item.remove()
})

// task-2
const dramaGenre = document.querySelector('.promo__genre')
dramaGenre.textContent = 'comedy'

// task-3
const promoBackground = document.querySelector('.promo__bg')
promoBackground.style.backgroundImage = 'url("img/1.jpg")'

// task-4
const seriesDB = {
    series: [
        'Omar',
        'The Final Legacy',
        'Ertugrul',
        'Magnificent Century',
        'The Great Seljuks: Guardians...',
    ]
}

const seriesList = document.querySelector('.promo__interactive-list')
seriesList.innerHTML = ''
seriesDB.series.forEach((item, idx) => {
    seriesList.innerHTML += `
        <li class="promo__interactive-item">
            ${1 + idx} ${item}
            <div class="delete"></div>
        </li>
    `
})