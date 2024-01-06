/* navigation scroll*/
let index = 0
function changeNavigation(newIndex) {
    setTimeout(()=>{
        index = newIndex
    },500)
}

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
