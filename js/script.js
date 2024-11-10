let tabs = document.querySelectorAll('.tabheader__item')


tabs.forEach((tab, index) => {
    tab.onclick = () => {
        
        
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active')
        })

        tab.classList.add('tabheader__item_active')
        showContent(index)
    }
})



function showContent(idx = 0){

    console.log(idx);
    

    let content = document.querySelectorAll('.tabcontent')
    
    content.forEach((item) => {
        item.classList.add('hide')
    })

    content[idx].classList.remove('hide')
    content[idx].classList.add('show', 'fade')
    
   
}

showContent()



function getTime (endTime) {
    let now = new Date()

    const total = Date.parse(endTime) - Date.parse(now)

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { total, days, hours, minutes, seconds }
}

let deadline = '2024-11-23'
console.log(getTime(deadline));


let interval = setInterval(() => {
    const time = getTime(deadline)

    document.getElementById('days').textContent = time.days
    document.getElementById('hours').textContent = time.hours
    document.getElementById('minutes').textContent = time.minutes
    document.getElementById('seconds').textContent = time.seconds

    if (time.total <= 0) {
        clearInterval(interval)

        document.getElementById('days').textContent = '0'
        document.getElementById('hours').textContent = '0'
        document.getElementById('minutes').textContent = '0'
        document.getElementById('seconds').textContent = '0'
    }


    
}, 1000);






// function getTime (time) {
//     let now = new Date()

//     const endTime = now.getTime() + time.total

//     const total = endTime - now.getTime()

//     const days = Math.floor(total / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((total / (1000 * 60)) % 60);
//     const seconds = Math.floor((total / 1000) % 60);

//     return { total, days, hours, minutes, seconds }

// }

// const time  = {
//     total: (12*24*60*60*1000) + (20*60*60*1000) + (56*60*1000) + (20*1000)
// }

// let interval = setInterval(() => {
    
//     const timeleft = getTime(time)

//     document.getElementById('days').textContent = timeleft.days
//     document.getElementById('hours').textContent = timeleft.hours
//     document.getElementById('minutes').textContent = timeleft.minutes
//     document.getElementById('seconds').textContent = timeleft.seconds

//     if (timeleft.total <= 0) {
//         clearInterval(interval)

//         document.getElementById('days').textContent = '0'
//         document.getElementById('hours').textContent = '0'
//         document.getElementById('minutes').textContent = '0'
//         document.getElementById('seconds').textContent = '0'
//     }
    
// }, 1000);



let btndark = document.querySelector('.btn_dark')
let btnwhite = document.querySelector('.btn_white')
let modal = document.querySelector('.modal')
let closemodal = document.querySelector('.modal__close')

btndark.onclick = () => {
    modal.style.display = 'block';
    
}

btnwhite.onclick = () => {
    modal.style.display = 'block';
    
}

closemodal.onclick = () => {
    modal.style.display = 'none';

}



let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let slider = document.querySelector('.offer__slider-wrapper')
let slides = document.querySelectorAll('.offer__slide')

let current = document.querySelector('#current')
let total = document.querySelector('#total')

let idx = 0

total.textContent = slides.length

newslide()

function newslide () {
    slides.forEach((slide) => {
        slide.style.display = 'none'
    })
    
    slides[idx].style.display = 'block'
    current.textContent = idx + 1
}

next.onclick = () => {
    idx = (idx + 1) % slides.length
    newslide()
}

prev.onclick = () => {
    idx = (idx - 1 + slides.length) % slides.length
    newslide()
}
