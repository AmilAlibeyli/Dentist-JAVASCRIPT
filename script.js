// Third Page
let month = ['January', 'February', 'March', 'April']
let ay = document.querySelector('.month')
let item = document.querySelector('.item')
let childItem = document.querySelector('.item:last-child')

function turnMonth() {


    if (ay.innerHTML === 'August') {
        ay.innerHTML = 'September'
        item.setAttribute("style", 'grid-column-start:6')
        childItem.setAttribute("style", "display:none")
    }
    else if (ay.innerHTML === 'September') {
        ay.innerHTML = 'October'
        item.setAttribute("style", 'grid-column-start:1')
        childItem.setAttribute("style", "display:block")


    }
    else if (ay.innerHTML === 'October') {
        ay.innerHTML = 'November'
        item.setAttribute("style", 'grid-column-start:4')
        childItem.setAttribute("style", "display:none")

    }
    else if (ay.innerHTML === 'November') {
        ay.innerHTML = 'December'
        item.setAttribute("style", 'grid-column-start:5')
        childItem.setAttribute("style", "display:block")
    }


    else if (ay.innerHTML === 'January') {
        ay.innerHTML = 'February'
        childItem.setAttribute("style", "display:none")
        item.setAttribute("style", 'grid-column-start:4')

    }
    else if (ay.innerHTML === 'February') {
        ay.innerHTML = 'March'
        childItem.setAttribute("style", "display:block")
        item.setAttribute("style", 'grid-column-start:3')


    }
    else if (ay.innerHTML === 'March') {
        ay.innerHTML = 'April'
        childItem.setAttribute("style", "display:none")
        item.setAttribute("style", 'grid-column-start:6')

    }
    else if (ay.innerHTML === 'April') {
        ay.innerHTML = 'May'
        childItem.setAttribute("style", "display:block")
        item.setAttribute("style", 'grid-column-start:1')


    }
    else if (ay.innerHTML === 'May') {
        ay.innerHTML = 'June'
        childItem.setAttribute("style", "display:none")
        item.setAttribute("style", 'grid-column-start:4')

    }
    else if (ay.innerHTML === 'June') {
        ay.innerHTML = 'July'
        childItem.setAttribute("style", "display:block")
        item.setAttribute("style", 'grid-column-start:5')

    }
    else if (ay.innerHTML === 'July') {
        ay.innerHTML = 'August'
        item.setAttribute("style", 'grid-column-start:2')

    }

}
function backMonth() {
    if (ay.innerHTML === 'February') {
        ay.innerHTML = 'January'
        childItem.setAttribute("style", "display:block")
        item.setAttribute("style", 'grid-column-start:5')

    }
    else if (ay.innerHTML === 'March') {
        ay.innerHTML = 'February'
        childItem.setAttribute("style", "display:none")
        item.setAttribute("style", 'grid-column-start:3')


    }
    else if (ay.innerHTML === 'April') {
        ay.innerHTML = 'March'
        childItem.setAttribute("style", "display:block")
        item.setAttribute("style", 'grid-column-start:3')

    }
    else if (ay.innerHTML === 'May') {
        ay.innerHTML = 'April'
        childItem.setAttribute("style", "display:none")
        item.setAttribute("style", 'grid-column-start:6')

    }
    else if (ay.innerHTML === 'June') {
        ay.innerHTML = 'May'
        childItem.setAttribute("style", "display:block")
        item.setAttribute("style", 'grid-column-start:1')

    }
    else if (ay.innerHTML === 'July') {
        ay.innerHTML = 'June'
        childItem.setAttribute("style", "display:none")
        item.setAttribute("style", 'grid-column-start:4')


    }
    else if (ay.innerHTML === 'August') {
        ay.innerHTML = 'July'
        item.setAttribute("style", 'grid-column-start:5')

    }
    else if (ay.innerHTML === 'September') {
        ay.innerHTML = 'August'
        childItem.setAttribute("style", "display:block")
        item.setAttribute("style", 'grid-column-start:2')

    }
    else if (ay.innerHTML === 'October') {
        ay.innerHTML = 'September'
        childItem.setAttribute("style", "display:none")
        item.setAttribute("style", 'grid-column-start:5')

    }
    else if (ay.innerHTML === 'November') {
        ay.innerHTML = 'October'
        childItem.setAttribute("style", "display:block")
        item.setAttribute("style", 'grid-column-start:5')

    }
    else if (ay.innerHTML === 'December') {
        ay.innerHTML = 'November'
        childItem.setAttribute("style", "display:none")
        item.setAttribute("style", 'grid-column-start:3')

    }

}


// Work Panel

let rightPanel = document.querySelectorAll('.sectionright')
let circle = document.querySelectorAll('.circle')
let choice = document.querySelectorAll('.choice')
let number = document.querySelectorAll('.num')
let doctor1 = document.querySelector('.namesection1')
let doctor2 = document.querySelector('.namesection2')
let oneDate = document.querySelectorAll('.onedate')
let noneflexy = document.querySelector('.noneflex')
let input = document.querySelectorAll('input')
let validationparent = document.querySelector('.validationparent')
let exitbutton = document.querySelector('.exitbtn')
let luckymessage = document.querySelector('.confirmessage')
let warningMessage = document.querySelector('.warning')
let list = document.querySelectorAll('.siyahı')
let tikImg = document.querySelectorAll('.tikimg')
let greenBack = document.querySelectorAll('.greenback')
let flexNum = document.querySelectorAll('.flexnum')
let service1 = document.querySelector('.servicesection1')
let service2 = document.querySelector('.servicesection2')
let service3 = document.querySelector('.servicesection3')
let btnc=document.querySelector('.btn4');

btnc.addEventListener('click', confirm);

// choice.forEach(item => {
//     if (item.style.color == 'green') {
//         item.style.color = "blue"
//     }
//     else {
//         item.style.cursor = "pointer"
//     }

// })

circle[0].classList.add('greenback')
choice[0].classList.add('greencolor')



function openService1() {
    rightPanel[0].setAttribute('style', 'display:none')
    rightPanel[1].setAttribute('style', 'display:block')
    doctor1.classList.add('greenborder')
    doctor2.classList.remove('greenborder')
}

function openService2() {
    rightPanel[0].setAttribute('style', 'display:none')
    rightPanel[1].setAttribute('style', 'display:block')
    doctor2.classList.add('greenborder')
    doctor1.classList.remove('greenborder')

}

function openCalendar1() {
    rightPanel[1].setAttribute('style', 'display:none')
    rightPanel[2].setAttribute('style', 'display:block')
    service1.classList.add('greenborder')
    service2.classList.remove('greenborder')
    service3.classList.remove('greenborder')


}
function openCalendar2() {
    rightPanel[1].setAttribute('style', 'display:none')
    rightPanel[2].setAttribute('style', 'display:block')
    service2.classList.add('greenborder')
    service1.classList.remove('greenborder')
    service3.classList.remove('greenborder')
}
function openCalendar3() {
    rightPanel[1].setAttribute('style', 'display:none')
    rightPanel[2].setAttribute('style', 'display:block')
    service3.classList.add('greenborder')
    service1.classList.remove('greenborder')
    service2.classList.remove('greenborder')
    
}


function secondPage() {
    rightPanel[0].setAttribute('style', 'display:none')
    rightPanel[1].setAttribute('style', 'display:block')
    circle[1].classList.add('greenback')
    choice[1].classList.add('greencolor')
    circle[0].classList.remove('greenback')
    choice[0].classList.remove('greencolor')
    circle[0].style.backgroundColor = 'blue'
    choice[0].style.color = 'white'
    flexNum[0].style.display = 'none'
    tikImg[0].style.display = 'block'
    choice[1].removeAttribute('id');
}

function thirdPage() {
    rightPanel[1].setAttribute('style', 'display:none')
    rightPanel[2].setAttribute('style', 'display:block')
    circle[2].classList.add('greenback')
    choice[2].classList.add('greencolor')
    circle[1].classList.remove('greenback')
    choice[1].classList.remove('greencolor')
    circle[1].style.backgroundColor = 'blue'
    choice[1].style.color = 'white'
    flexNum[1].style.display = 'none'
    tikImg[1].style.display = 'block'
    choice[2].removeAttribute('id');



}
function fourthPage() {
    rightPanel[2].setAttribute('style', 'display:none')
    rightPanel[3].setAttribute('style', 'display:block')
    circle[3].classList.add('greenback')
    choice[3].classList.add('greencolor')
    circle[2].classList.remove('greenback')
    choice[2].classList.remove('greencolor')
    circle[2].style.backgroundColor = 'blue'
    choice[2].style.color = 'white'
    flexNum[2].style.display = 'none'
    tikImg[2].style.display = 'block'
    choice[3].removeAttribute('id');

}
function backThird() {
    rightPanel[3].setAttribute('style', 'display:none')
    rightPanel[2].setAttribute('style', 'display:block')
    circle[2].classList.add('greenback')
    choice[2].classList.add('greencolor')
    tikImg[2].style.display = 'none'
    flexNum[2].style.display = 'block'
    circle[3].classList.remove('greenback')
    choice[3].classList.remove('greencolor')
    choice[3].setAttribute('id', 'cursorstyle');


}
function backSecond() {
    rightPanel[2].setAttribute('style', 'display:none')
    rightPanel[1].setAttribute('style', 'display:block')
    circle[1].classList.add('greenback')
    choice[1].classList.add('greencolor')
    circle[2].classList.remove('greenback')
    choice[2].classList.remove('greencolor')
    circle[2].style.backgroundColor = '#4D545A'
    choice[2].style.color = '#626C76'
    tikImg[1].style.display = 'none'
    flexNum[1].style.display = 'block'
    choice[2].setAttribute('id', 'cursorstyle');

}
function backFirst() {
    rightPanel[1].setAttribute('style', 'display:none')
    rightPanel[0].setAttribute('style', 'display:block')
    circle[0].classList.add('greenback')
    choice[0].classList.add('greencolor')
    circle[1].classList.remove('greenback')
    choice[1].classList.remove('greencolor')
    circle[1].style.backgroundColor = '#4D545A'
    choice[1].style.color = '#626C76'
    choice[1].setAttribute('id', 'cursorstyle');

}




function getTime() {
    noneflexy.style.display = 'block'
}

console.log(input)

function confirm() {
    input.forEach(item=>{
        if (item.value =='') {
            validationparent.style.display = 'block'
            luckymessage.style.display = 'none'
            warningMessage.style.display = 'block'  
        
        }
    
        else {
            validationparent.style.display = 'block'
            warningMessage.style.display = 'none'
            luckymessage.style.display = 'block'
            exitbutton.setAttribute('style', 'position:relative; left:80px;')
        }
    })
}


function noneValid() {
    validationparent.style.display = 'none'
}

