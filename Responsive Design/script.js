const mainNavHamburgerMenu = document.querySelector('#hamburger-menu');

const hideOnSmallScreens = document.querySelectorAll('.hiddenOnSmallScreens');

const smallScreenSize = 768;

const transitionDuration = 300;

let isScreenSmall = null;

//Decision Making using XNOR boolean algebra
function xnorDecision(prevState, currentState) {
    return prevState === currentState;
}

//main function for responsive this is the heart of my responsive design
function handleResponsive() {
    const currentScreenIsSmall = window.innerWidth <= smallScreenSize;
    if (xnorDecision(isScreenSmall, currentScreenIsSmall)) return;
    isScreenSmall = currentScreenIsSmall; //sets the condition based on the current screen size
    handleMainNavResponsive(currentScreenIsSmall);

}
window.addEventListener('resize', handleResponsive);
window.addEventListener('DOMContentLoaded', handleResponsive);


function mainNavHamburgerAnimations(decisionFromXnor){
    if (decisionFromXnor) {
        mainNavHamburgerMenu.style.display = 'block';
        mainNavHamburgerMenu.style.opacity = 0;
        setTimeout(() => mainNavHamburgerMenu.style.opacity = 1, 5);
    } else {
        mainNavHamburgerMenu.style.display = 'none';
        mainNavHamburgerMenu.style.opacity = 0;
    }
}


function mainNavListItemsAnimations(decisionFromXnor) {
    hideOnSmallScreens.forEach(mainNavItem => {
        if (decisionFromXnor) {
            // Hide: fade out, then set display none
            mainNavItem.style.opacity = 0;
            setTimeout(() => mainNavItem.style.display = 'none', transitionDuration);
        } else {
            // Show: set display flex, then fade in
            mainNavItem.style.display = 'flex';
            mainNavItem.style.opacity = 0;
            setTimeout(() => mainNavItem.style.opacity = 1, 5);
        }
    });
}

//FIX THE BUG HERE
function showMobileMenu(decisionFromXnor) {

    mainNavListItemsAnimations(decisionFromXnor);

    setTimeout(() => mainNavHamburgerAnimations(decisionFromXnor), transitionDuration);

}

function hideMobileMenu(decisionFromXnor) {

    mobileMenu.style.transform  = 'translateX(200%)';
    mainNavListItemsAnimations(decisionFromXnor);
    mainNavHamburgerAnimations(decisionFromXnor);

}

function handleMainNavResponsive(decisionFromXnor) {
    if (decisionFromXnor) {

    showMobileMenu(decisionFromXnor);

    } else {

    hideMobileMenu(decisionFromXnor);

    }
}

const mobileMenu = document.querySelector('#mobile-navigation');
const closeButton = document.querySelector('.close');

function openMobileMenu() {
    mobileMenu.style.transform  = 'translateX(0)';
    setTimeout(() => {
        setTimeout(() => mainNavHamburgerMenu.style.opacity = 0, 2);
    }, transitionDuration);
}

function closeMobileMenu() {
    mobileMenu.style.transform  = 'translateX(200%)';
    setTimeout(() => {
        setTimeout(() => mainNavHamburgerMenu.style.opacity = 1, 2);
    }, transitionDuration);

}

mainNavHamburgerMenu.addEventListener('click', openMobileMenu);
closeButton.addEventListener('click', closeMobileMenu);