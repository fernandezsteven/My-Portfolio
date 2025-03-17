const list = document.getElementById('list');
const menu = document.getElementById('menu');
const bars = document.querySelector('.fa-bars');

menu.addEventListener('click', () => {
    list.classList.toggle('translate-x-0');
    bars.classList.toggle('fa-xmark');
});

