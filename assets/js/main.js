const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let sideBarPC = $('.sidebar-pc')
let sideBarMobile = $('.sidebar-mobile')
let iconClosePC = $('.icon-close-pc')
let iconCloseMobile = $('.icon-close-mobile')
let iconMenu = $('.header__icon-menu')
let dropdownItem = $$('.dropdown-item')

let openSideBar = () => {
    sideBarPC.style.right = 0
    sideBarMobile.style.right = 0
}
let closeSideBar = () => {
    sideBarPC.style.right = '-400px'
    sideBarMobile.style.right = '-400px'
}
iconMenu.addEventListener('click', openSideBar)
iconClosePC.addEventListener('click', closeSideBar)
iconCloseMobile.addEventListener('click', closeSideBar)


function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (Word) {
            return Word[0].toUpperCase() + Word.substr(1);
        })
        .join(' ');
}
dropdownItem.forEach(function (item) {
    item.innerHTML = toUpper(item.innerHTML)

})

// slider
let sliderList = $('.beaches__slider-list')
let btnPrev = $('.beaches__slider-prev')
let btnNext = $('.beaches__slider-next')
let dotList = $('.beaches__slider-dots')
let dotItem = $('.beaches__slider-dots-item')

let sliderLength = sliderList.children.length
let sliderItemWidth = sliderList.children[0].offsetWidth
let currentPosition = 0;
let currentIndex = 0
let dotArray = [...dotList.children]


const handleClickBtn = function (type) {
    if (type === 1) {
        if (currentIndex === sliderLength - 1) return
        currentPosition = currentPosition - sliderItemWidth
        sliderList.style.left = currentPosition + 'px'

        currentIndex++

        dotArray.forEach(el => el.classList.remove('active'))
        dotArray[currentIndex].classList.add('active')
    } else {
        if (currentIndex === 0) return
        currentPosition = currentPosition + sliderItemWidth
        sliderList.style.left = currentPosition + 'px'

        currentIndex--

        dotArray.forEach(el => el.classList.remove('active'))
        dotArray[currentIndex].classList.add('active')
    }
}

btnNext.addEventListener('click', () => handleClickBtn(1))
btnPrev.addEventListener('click', () => handleClickBtn(-1));

dotArray.forEach(dot => dot.addEventListener('click', function () {
    dotArray.forEach(el => el.classList.remove('active'))
    dot.classList.add('active')

    currentIndex = +dot.dataset.index
    currentPosition = sliderItemWidth * currentIndex * -1
    sliderList.style.left = currentPosition + 'px'

}))
let loop = setInterval(function () {
    sliderItemWidth = sliderList.children[0].offsetWidth
    currentIndex++
    if (currentIndex > sliderLength - 1) {
        currentIndex = 0
    }
    currentPosition = sliderItemWidth * currentIndex * -1
    sliderList.style.left = currentPosition + 'px'


    dotArray.forEach(el => el.classList.remove('active'))
    dotArray[currentIndex].classList.add('active')


}, 3000)