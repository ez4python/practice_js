window.addEventListener('DOMContentLoaded', () => {
  const tabParent = document.querySelector('.tabheader__items'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    loader = document.querySelector('.loader')

  // Loader
  setTimeout(() => {
    loader.style.opacity = '0'
    setTimeout(() => {
      loader.style.display = 'none'
    }, 500)
  }, 2000)

  // Tabs
  function hideTabContent() {
    tabsContent.forEach(item => {
      // item.style.display = 'none'
      item.classList.add('hide')
      item.classList.remove('show', 'fade')
    })

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active')
    })
  }

  function showTabContent(idx = 0) {
    // tabsContent[idx].style.display = 'block'
    tabsContent[idx].classList.add('show', 'fade')
    tabsContent[idx].classList.remove('hide')
    tabs[idx].classList.add('tabheader__item_active')
  }

  hideTabContent()
  showTabContent()

  tabParent.addEventListener('click', (event) => {
    const target = event.target
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, idx) => {
        if (target === item) {
          hideTabContent()
          showTabContent(idx)
        }
      })
    }
  })
})