var menuIcon = document.querySelector('.nav-menuicon');
var navUl = document.querySelector('.nav-ul');

menuIcon.addEventListener('click', () => {

    if (navUl.classList.contains('active')) {

        navUl.classList.remove('active');
        document.querySelector('.nav-menuicon img').src = 'assets/img/menu.png';

    } else {

        navUl.classList.add('active');
        document.querySelector('.nav-menuicon img').src = 'assets/img/close.png';

    }

});