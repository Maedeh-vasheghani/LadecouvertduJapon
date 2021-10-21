const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.navbar-liste');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active');
})


const allLinks = document.querySelectorAll('.navbar-item');

allLinks.forEach(function(item){

    item.addEventListener('click', function(){
        menu.classList.toggle('active');
    })

})