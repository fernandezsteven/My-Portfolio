let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// menu.onclick
if (menu) { // check if the menu icon exists
    menu.addEventListener('click', () => { // add a click event listener to the menu icon
        menu.classList.toggle('bx-x'); // toggle the 'bx-x' class on the menu icon
        navbar.classList.toggle('active'); // toggle the 'active' class on the navbar
    })
}

// Scroll section active link
let sections = document.querySelectorAll('section');// Select all sections
let navigationLinks = document.querySelectorAll('header nav a'); // Select all navigation links
 
// Add active class to current section link
window.addEventListener('scroll', () => {
    if (sections.length > 0) {
        sections.forEach(secs => {
            let top = window.scrollY;
            let offset = secs.offsetTop - 100;
            let height = secs.offsetHeight;
            let id = secs.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navigationLinks.forEach(linked => {
                    linked.classList.remove('active');
                });

                let activeLink = document.querySelector(`header nav a[href*=${id}]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }
});