window.onload = function(){
    const menu = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        navbar.classList.toggle('is-active');
    })

}
