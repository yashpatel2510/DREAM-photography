// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

// 
$(function () {
    setTimeout(function () { $("#hideDiv").fadeOut(1000); }, 5000)

})


$(function () {
    setTimeout(function () { $("#hh").fadeOut(1000); }, 5000)
})



// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);



// NAVIGASAN BAR STArt
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').slideToggle(300);
    });

    smallScreenMenu();
    let temp;

    function resizeEnd() {
        smallScreenMenu();
    }

    $(window).resize(function() {
        clearTimeout(temp);
        temp = setTimeout(resizeEnd, 100);
        resetMenu();
    });
});


const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');

function smallScreenMenu() {
    if ($(window).innerWidth() <= 992) {
        menuLinks.each(function(item) {
            $(this).click(function() {
                $(this).next().slideToggle();
            });
        });
    } else {
        menuLinks.each(function(item) {
            $(this).off('click');
        });
    }
}

function resetMenu() {
    if ($(window).innerWidth() > 992) {
        subMenus.each(function(item) {
            $(this).css('display', 'none');
        });
    }
}

// three line
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})

// contact us
const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    })
})




















































































