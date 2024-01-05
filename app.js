/*чтобы программно менять активные слайды, создали плагин*/
function slidesPlugin(activeSlide = 4)  {
    const slides = document.querySelectorAll('.slide')

slides[activeSlide].classList.add('active') //создали массив

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
}

slidesPlugin() /*в функцию вставляем номер массива и тогда тот слайд всегда будет 
активным. Т.к. сейчас ничего не задано, то берется значение - 4 (самая верхняя строка)*/