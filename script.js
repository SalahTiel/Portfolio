document.getElementById('nav-1').click()
// adds horizontal scrolling with fixed positions
let index = 0
function changeNavigation(newIndex) {
    openMobileMenu()
    setTimeout(()=>{
        index = newIndex
    },500)
}
function clickOnSon(reference){
    document.getElementById('nav-' + reference).click()
    document.getElementsByClassName('l-header')[0].classList.remove('l-header--opened')
document.getElementsByClassName('header__list')[0].classList.remove('header__list--opened')
}


//change the background color of the current section
function currentSection(){

    const horizontalPosition =  document.body.scrollLeft;

    let homePosition = window.innerWidth
    let aboutPosition = homePosition * 2
    let projectsPosition = homePosition * 3
    let contactPosition = homePosition * 4
    let playgroundPosition = homePosition * 5

    if(horizontalPosition < homePosition){
        document.getElementById('itemList-1').classList.add('header__list__item--selected')
        document.getElementById('itemList-2').classList.remove('header__list__item--selected')
        document.getElementById('itemList-3').classList.remove('header__list__item--selected')
        document.getElementById('itemList-4').classList.remove('header__list__item--selected')
        document.getElementById('itemList-5').classList.remove('header__list__item--selected')
    }
    else if(horizontalPosition >= homePosition && horizontalPosition < aboutPosition){
        document.getElementById('itemList-1').classList.remove('header__list__item--selected')
        document.getElementById('itemList-2').classList.add('header__list__item--selected')
        document.getElementById('itemList-3').classList.remove('header__list__item--selected')
        document.getElementById('itemList-4').classList.remove('header__list__item--selected')
        document.getElementById('itemList-5').classList.remove('header__list__item--selected')
    }
    else if(horizontalPosition >= aboutPosition && horizontalPosition < projectsPosition){
        document.getElementById('itemList-1').classList.remove('header__list__item--selected')
        document.getElementById('itemList-2').classList.remove('header__list__item--selected')
        document.getElementById('itemList-3').classList.add('header__list__item--selected')
        document.getElementById('itemList-4').classList.remove('header__list__item--selected')
        document.getElementById('itemList-5').classList.remove('header__list__item--selected')
    }
    else if(horizontalPosition >= projectsPosition && horizontalPosition < contactPosition){
        document.getElementById('itemList-1').classList.remove('header__list__item--selected')
        document.getElementById('itemList-2').classList.remove('header__list__item--selected')
        document.getElementById('itemList-3').classList.remove('header__list__item--selected')
        document.getElementById('itemList-4').classList.add('header__list__item--selected')
        document.getElementById('itemList-5').classList.remove('header__list__item--selected')
    }
    else if(horizontalPosition >= contactPosition && horizontalPosition < playgroundPosition){
        document.getElementById('itemList-1').classList.remove('header__list__item--selected')
        document.getElementById('itemList-2').classList.remove('header__list__item--selected')
        document.getElementById('itemList-3').classList.remove('header__list__item--selected')
        document.getElementById('itemList-4').classList.remove('header__list__item--selected')
        document.getElementById('itemList-5').classList.add('header__list__item--selected')
    }
}
setInterval(()=>{currentSection()}, 200)

document.addEventListener('wheel', (event)=> {
    const direction = event.deltaY
    let navigationClick = 0

    if(direction > 0){
        navigationClick = index + 1
        switch(navigationClick){
            case 1:
                document.getElementById('nav-1').click()
                break
            case 2:
                document.getElementById('nav-2').click()
                break
            case 3:
                document.getElementById('nav-3').click()
                break
            case 4:
                document.getElementById('nav-4').click()
                break
            case 5:
                document.getElementById('nav-5').click()
                break
        }
    }else{
        navigationClick = index - 1
        switch(navigationClick){
            case 1:
                document.getElementById('nav-1').click()
                break
            case 2:
                document.getElementById('nav-2').click()
                break
            case 3:
                document.getElementById('nav-3').click()
                break
            case 4:
                document.getElementById('nav-4').click()
                break
            case 5:
                document.getElementById('nav-5').click()
                break
        }
    }
})

//mobile menu
document.getElementsByClassName('l-header')[0].classList.remove('l-header--opened')
document.getElementsByClassName('header__list')[0].classList.remove('header__list--opened')

function openMobileMenu(){
    document.getElementsByClassName('l-header')[0].classList.toggle('l-header--opened')
    document.getElementsByClassName('header__list')[0].classList.toggle('header__list--opened')
}

function switchTheme(theme){
    
    if( theme == 'light'){
        document.getElementById('icon-sun').src = 'assets/icon-sun-select.png'
        document.getElementById('icon-moon').src = 'assets/icon-moon-light.png'
        document.querySelector('html').classList.remove('dark')
        
    }
    else{
        document.getElementById('icon-sun').src = 'assets/icon-sun-dark.png'
        document.getElementById('icon-moon').src = 'assets/icon-moon-select.png'
        document.querySelector('html').classList.add('dark')
    }
}

//change project navigation
function changeProject (index){
    let mockup = document.getElementsByClassName('projects__content__img')[0]
    let projectName = document.getElementsByClassName('content__texts__title')[0]
    let projectDescription = document.getElementsByClassName('content__texts__paragraph')[0]

    switch(index){
        case 1:
            mockup.src = 'assets/mockup-gymeasy.png'
            projectName.textContent = 'GymEasy'
            projectDescription.textContent = 'GymEasy é uma aplicação web desenvolvida para que academias esportivas possam administrar o cadastro de seus alunos. (Este projeto está em fase de desenvolvimento)'
            break

        case 2:
            mockup.src = 'assets/mockup-rh.png'
            projectName.textContent = 'RH Control'
            projectDescription.textContent = 'RH Control é uma aplicação web desenvolvida para auxiliar o controle de Recursos Humanos dentro de uma empresa. (Este projeto está em fase de desenvolvimento)'
            break

        case 3:
            mockup.src = 'assets/mockup-ybox.png'
            projectName.textContent = 'YBox'
            projectDescription.textContent = 'Ybox é uma aplicação web desenvolvida para auxiliar na logistica de empresas que precisam de um controle de estoque. (Este projeto está em fase de desenvolvimento)'
            break
    }
}