var menuIcon = document.querySelector('.nav-menuicon');
var navUl = document.querySelector('.nav-ul');
var navText = document.querySelector('.navmenu-text');

menuIcon.addEventListener('click', () => {

    if (navUl.classList.contains('active')) {

        navUl.classList.remove('active');
        navText.classList.remove('active');
        document.querySelector('.nav-menuicon img').src = 'assets/img/menu.png';

    } else {

        navUl.classList.add('active');
        navText.classList.add('active');
        document.querySelector('.nav-menuicon img').src = 'assets/img/close.png';

    }

});