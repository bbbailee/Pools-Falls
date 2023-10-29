let section2 = document.getElementById('s2')
window.addEventListener('scroll', onScrollVisibilty)
let headerImg = document.getElementById('headerimg')
let nav = document.querySelectorAll('#nav > *:not(#logo)')
let toTopBtn = document.querySelector('#topbtn')
let searchBtn = document.querySelector('#searchbtn')
let menuBtn = document.querySelector('#menubtn')
let logo = document.querySelector('#logo')

function onScrollVisibilty() {
    let pos2 = section2.getBoundingClientRect()
    let x = pos2.left + window.scrollX
    let y = pos2.top + window.scrollY
    let top = window.scrollY
    let topbtn = document.getElementById('topbtn')
    let logoimg = document.querySelector('#imgsrc')
    console.log(y, top)

    if (top >= y) {
        nav.forEach(function(item) {
            item.style.visibility = 'hidden';
        });
      topbtn.style.visibility ='visible'
      searchBtn.style.color = 'white'
      menuBtn.style.color = 'white'
      logoimg.src = 'logo.svg'
    

    } else {
        nav.forEach(function(item) {
            item.style.visibility = 'visible';
        });
      topbtn.style.visibility ='hidden'
      searchBtn.style.color = '#042327'
      menuBtn.style.color = '#042327'
      logoimg.src = 'logoblack.svg'

    }

  }

  ////////////////////// menu and search buttons and menus 

  let menu = document.getElementById('menubtn')
  let menuLight = document.querySelector('#menubtnlight')
  let sideMenu = document.getElementById('slideinmenu')
  let menuItem = document.querySelectorAll('.menuItem')
  let xbtn = document.getElementById('xbtn')
  let xbtn2 = document.getElementById('xbtn2')
  let searchMenu = document.getElementById('searchslidein')
  let searchBtnLight = document.getElementById('searchbtnlight')

document.addEventListener("DOMContentLoaded", function() {

function openMenu(){
    if(menu, 'click'){
        menu.style.visibility='hidden'
        sideMenu.style.transform ='translate(0, 0)'
    }
}

function closeMenu(){
    if (xbtn, 'click'){
        sideMenu.style.transform ='translate(-60vw, 0)'
        menu.style.visibility='visible'
        // menuLight.style.visibility='visible'
    }
}

function openSearch(){
    if(searchBtn, 'click'){
        searchMenu.style.transform ='translate(0, 0)'
        searchBtn.style.visibility= 'none'
    }
}

function closeSearch(){
    if (xbtn2, 'click'){
        searchMenu.style.transform ='translate(60vw, 0)'
        searchBtn.style.visibility='visible'
    }
}

menu.addEventListener('click', openMenu)
xbtn.addEventListener('click', closeMenu)
searchBtn.addEventListener('click', openSearch)
xbtn2.addEventListener('click', closeSearch)
})

document.addEventListener("DOMContentLoaded", function() {


function openMenuLight(){
    if(menuLight,'click'){
        menuLight.style.visibility='hidden'
        sideMenu.style.transform ='translate(0, 0)'
    }
}

function closeMenuLight(){
    if (xbtn, 'click'){
        sideMenu.style.transform ='translate(-60vw, 0)'
        menuLight.style.visibility='visible'
    }
}


function openSearchLight(){
    if(searchBtnLight, 'click'){
        searchMenu.style.transform ='translate(0, 0)'
        searchBtnLight.style.visibility= 'none'
    }
}

function closeSearchLight(){
    if (xbtn2, 'click'){
        searchMenu.style.transform ='translate(60vw, 0)'
        searchBtnLight.style.visibility='visible'
    }
}

menuLight.addEventListener('click', openMenuLight)
xbtn.addEventListener('click', closeMenuLight)
searchBtnLight.addEventListener('click', openSearchLight)
xbtn2.addEventListener('click', closeSearchLight)

})

//////////////////////// all locations filter buttons 

let azbtn = document.getElementById('AZ')
let azblock = document.getElementById('azlocationcards')
let allblock = document.getElementById('alllocationcards')
let latestbtn = document.getElementById('recentlyAdded')

document.addEventListener("DOMContentLoaded", function() {
    function azblocks(){
        if(azbtn, 'click'){
            azblock.style.display = 'flex'
            allblock.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'
            errorblocks.style.display = 'none'
        }
        else{
            azblock.style.display = 'none'
            allblock.style.display = 'flex'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            errorblocks.style.display = 'none'
        }
    }

    function latestblocks(){
        if(latestbtn, 'click'){
            azblock.style.display = 'none'
            allblock.style.display = 'flex'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'
            errorblocks.style.display = 'none'
        }
    }

    azbtn.addEventListener('click', azblocks)
    latestbtn.addEventListener('click', latestblocks)
})



// state button function all locations page 
// variables for states 
let act = document.getElementById('ACT')
let nsw = document.getElementById('NSW')
let qld = document.getElementById('QLD')
let wa = document.getElementById('WA')
let nt = document.getElementById('NT')
let tas = document.getElementById('TAS')
let vic = document.getElementById('VIC')

// variables for cardblocks  
let mataranka = document.getElementById('cardblockmataranka')
let babinda = document.getElementById('cardblockbabinda')
let curlcurl = document.getElementById('cardblockcurlcurl')
let tjaynera = document.getElementById('cardblocktjaynera')
let bondi = document.getElementById('cardblockbondi')
let cabarita = document.getElementById('cardblockcabarita')

let qldblocks = document.getElementById('qldlocationcards')
let ntblocks = document.getElementById('ntlocationcards')
let nswblocks = document.getElementById('nswlocationcards')
let errorblocks = document.getElementById('actlocationcards')




document.addEventListener("DOMContentLoaded", function() {
    function qldblock(){
        if(qld, 'click'){
            qldblocks.style.display = 'flex'
            allblock.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'
            errorblocks.style.display = 'none'
        }
        else{
            qldblocks.style.display = 'none'
            allblock.style.display = 'flex'
        }
    }

    function ntblock(){
        if(nt, 'click'){
            ntblocks.style.display = 'flex'
            allblock.style.display = 'none'
            qldblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'
            errorblocks.style.display = 'none'
        }
        else{
            ntblocks.style.display = 'none'
            allblock.style.display = 'flex'
        }
    }
    function nswblock(){
        if(nsw, 'click'){
            nswblocks.style.display = 'flex'
            allblock.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            azblock.style.display = 'none'
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'
            errorblocks.style.display = 'none'

        }
        else{
            nswblocks.style.display = 'none'
            allblock.style.display = 'flex'
        }
    }
    function actblock(){
        if(act, 'click'){
            errorblocks.style.display = 'flex'
            allblock.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'

        }
        else{
            allblock.style.display = 'flex'
            errorblocks.style.display = 'none'
        }
    }
    function wablock(){
        if(wa, 'click'){
            errorblocks.style.display = 'flex'
            allblock.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'

        }
        else{
            allblock.style.display = 'flex'
            errorblocks.style.display = 'none'
        }
    }
    function vicblock(){
        if(vic, 'click'){
            errorblocks.style.display = 'flex'
            allblock.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'

        }
        else{
            allblock.style.display = 'flex'
            errorblocks.style.display = 'none'
        }
    }
    function tasblock(){
        if(tas, 'click'){
            errorblocks.style.display = 'flex'
            allblock.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'

        }
        else{
            allblock.style.display = 'flex'
            errorblocks.style.display = 'none'

        }
    }

    qld.addEventListener('click', qldblock)
    nt.addEventListener('click', ntblock)
    nsw.addEventListener('click', nswblock)
    act.addEventListener('click', actblock)
    wa.addEventListener('click', wablock)
    vic.addEventListener('click', vicblock)
    tas.addEventListener('click', tasblock)
})


///////////////////////water type 
let pool = document.getElementById('poollocationcards')
let beach = document.getElementById('beachlocationcards')
let spring = document.getElementById('springlocationcards')
let river = document.getElementById('riverlocationcards')
let poolbtn = document.getElementById('pool')
let beachbtn = document.getElementById('beaches')
let springbtn = document.getElementById('hotsprings')
let riverbtn = document.getElementById('riverslakes')

document.addEventListener("DOMContentLoaded", function() {
    function poolblock(){
        if(poolbtn, 'click'){
            pool.style.display = 'flex'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'

            allblock.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            errorblocks.style.display = 'none'
        }
        else{
            allblock.style.display = 'flex'
            
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            errorblocks.style.display = 'none'
        }
    }
    
    function beachblock(){
        if(beachbtn, 'click'){
            beach.style.display = 'flex'
            pool.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'

            allblock.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            errorblocks.style.display = 'none'
        }
        else{
            allblock.style.display = 'flex'
            
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            errorblocks.style.display = 'none'
        }
    }

    function springsblock(){
        if(springbtn, 'click'){
            spring.style.display = 'flex'
            beach.style.display = 'none'
            pool.style.display = 'none'
            river.style.display = 'none'

            allblock.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            errorblocks.style.display = 'none'

        }
        else{
            allblock.style.display = 'flex'
            
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            errorblocks.style.display = 'none'
        }
    }

    function riverblock(){
        if(riverbtn, 'click'){
            river.style.display = 'flex'
            spring.style.display = 'none'
            beach.style.display = 'none'
            pool.style.display = 'none'

            allblock.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            errorblocks.style.display = 'none'
        }
        else{
            allblock.style.display = 'flex'
            
            pool.style.display = 'none'
            beach.style.display = 'none'
            spring.style.display = 'none'
            river.style.display = 'none'
            qldblocks.style.display = 'none'
            ntblocks.style.display = 'none'
            nswblocks.style.display = 'none'
            azblock.style.display = 'none'
            errorblocks.style.display = 'none'
        }
    }
    poolbtn.addEventListener('click', poolblock)
    beachbtn.addEventListener('click', beachblock)
    springbtn.addEventListener('click', springsblock)
    riverbtn.addEventListener('click', riverblock)

})

/////////////////////// heart button function 
    let button = document.getElementById('heart')

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Check if the button has the "active" class
        if (!button.classList.contains('active')) {
            // If it doesn't have the class, add it
            button.classList.add('active')
            console.log('its active')
        } else {
            // If it has the class, remove it
            button.classList.remove('active')
            console.log('it\'s not active')
        }})

