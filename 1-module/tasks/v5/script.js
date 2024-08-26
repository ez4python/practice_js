'use strict'


/*
-------TASKS-------
1. Reklama bloklarini o'chirish
2. "Drama" janrini -> "Komediya"ga o'zgaritiring
3. Orqa fonni o'zgratiring JavaScript yordamida
4. Seriallarni JavaScript dagi massiv yordamida ko'rsating
5. Xar bir serialni o'z nomeri bo'lsin
*/

document.addEventListener('DOMContentLoaded', () => {

    const promoAds = document.querySelectorAll('.promo__adv img')
    const dramaGenre = document.querySelector('.promo__genre')
    const promoBackground = document.querySelector('.promo__bg')
    const seriesList = document.querySelector('.promo__interactive-list')

    const deleteAds = (arr) => {
        arr.forEach(item => {
            item.remove()
        })
    }

    const makePromoChanges = () => {
        dramaGenre.textContent = 'comedy'
        promoBackground.style.backgroundImage = 'url("img/1.jpg")'
    }

    const seriesDB = {
        series: [
            'Omar',
            'The Final Legacy',
            'Ertugrul',
            'Magnificent Century',
            'The Great Seljuks: Guardians...',
        ],
    }

    function createSeriesList(series, parent) {
        parent.innerHTML = ''
        sortArray(series)
        series.forEach((item, idx) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">
                ${1 + idx} ${item}
                <div class="delete"></div>
            </li>
            `
        })

        document.querySelectorAll('.delete').forEach((trash, idx) => {
            trash.addEventListener('click', () => {
                trash.parentElement.remove()
                seriesDB.splice(idx, 1)
                createSeriesList(series, parent)
            })
        })
    }

    const sortArray = (arr) => {
        arr.sort()
    }

// ------------ VERSION #6 ------------

    const addForm = document.querySelector('form.add')
    const inputValue = addForm.querySelector('.adding__input')
    const checkbox = addForm.querySelector("[type='checkbox']")

    addForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newSeries = inputValue.value
        const is_checked = checkbox.checked

        if (newSeries) {
            if (newSeries.length > 18) {
                newSeries = `${newSeries.substring(0, 18)}...`
            }
            if (is_checked) {
                console.log(`Sevimi serial qo'shildi!`)
            }
            seriesDB.series.push(newSeries)
            sortArray(seriesDB.series)
            createSeriesList(seriesDB.series, seriesList)
        }

        event.target.reset()
    })

    makePromoChanges()
    deleteAds(promoAds)
    createSeriesList(seriesDB.series, seriesList)
    sortArray(seriesDB.series)

})