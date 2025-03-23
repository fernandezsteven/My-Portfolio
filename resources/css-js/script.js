const list = document.getElementById('list');
const menu = document.getElementById('menu');
const bars = document.querySelector('.fa-bars');
// toggle the list when the menu is clicked
menu.addEventListener('click', () => {
    list.classList.toggle('translate-x-0');
    bars.classList.toggle('fa-xmark');
}); 


// create a function to download the resume via window open
document.getElementById("download").onclick = function() {
    window.open("resources/files/resume.pdf");
}
