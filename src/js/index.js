// SWIPER JS

(function () {

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })
})();

// HAMBURGER JS

(function () {

    let hamburger = document.querySelector('.hamburger');
    let showMenu = (menu) => {
        menu.classList.add('visible');
    }
    
    let hideMenu = (menu) => {
        menu.classList.remove('visible');
    }
    
    let toggleOnHamburger = (hamburger) => {
        hamburger.classList.add('is-active');
    }
    
    let toggleOffHamburger = (hamburger) => {
        hamburger.classList.remove('is-active');
    }
    
    hamburger.addEventListener('click', function (e) {

        let hamburgerClasses = hamburger.classList;
        let menu = document.querySelector('.navigation');

        if(hamburgerClasses.contains('is-active')) {
            hideMenu(menu);
            toggleOffHamburger(hamburger);
        } else if (!hamburgerClasses.contains('is-active')){
            showMenu(menu);
            toggleOnHamburger(hamburger);
        }
    })

})();