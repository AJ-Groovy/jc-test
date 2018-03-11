'use strict';

// SWIPER JS

(function () {

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }

    });
})();

// HAMBURGER JS

(function () {

    var hamburger = document.querySelector('.hamburger');
    var showMenu = function showMenu(menu) {
        menu.classList.add('visible');
    };

    var hideMenu = function hideMenu(menu) {
        menu.classList.remove('visible');
    };

    var toggleOnHamburger = function toggleOnHamburger(hamburger) {
        hamburger.classList.add('is-active');
    };

    var toggleOffHamburger = function toggleOffHamburger(hamburger) {
        hamburger.classList.remove('is-active');
    };

    hamburger.addEventListener('click', function (e) {

        var hamburgerClasses = hamburger.classList;
        var menu = document.querySelector('.navigation');

        if (hamburgerClasses.contains('is-active')) {
            hideMenu(menu);
            toggleOffHamburger(hamburger);
        } else if (!hamburgerClasses.contains('is-active')) {
            showMenu(menu);
            toggleOnHamburger(hamburger);
        }
    });
})();