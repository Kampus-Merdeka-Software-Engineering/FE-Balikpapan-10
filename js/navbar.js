let popup = document.getElementsByClassName('popup')[0];
<<<<<<< HEAD
let btnLogin = document.getElementsByClassName('button-login')[0];
let dropClass = document.getElementsByClassName('classes-content')[0];
// let icon = document.getElementsByClassName('icon')[0];
let nav = document.getElementById('navbar');
let menuTgl = document.querySelector('.menu-toggle input');
let navUl = document.querySelector('nav ul')
=======
let btnLogin = document.getElementById('login');
let dropClass = document.getElementsByClassName('classes-content')[0];
let icon = document.getElementsByClassName('icon')[0];
let nav = document.getElementById('navbar');
>>>>>>> 573492e6949393101889c54759640e6d849831e1

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex'
    console.log('clicked');
});

document.getElementsByClassName('close')[0].addEventListener('click', () => {
    popup.style.display = 'none';
})

<<<<<<< HEAD
menuTgl.addEventListener('click', () => {
    navUl.classList.toggle('slide');
    // navUl.className += " slide";
})

// icon.addEventListener('click', (e) => {
//     e.preventDefault();
//     if(nav.className === "nav-menu"){
//         nav.className += " responsive";
//     }
//     else{
//         nav.className = "nav-menu";
//     }
// })
=======
icon.addEventListener('click', (e) => {
    e.preventDefault();
    if(nav.className === "nav-menu"){
        nav.className += " responsive";
    }
    else{
        nav.className = "nav-menu";
    }
})
>>>>>>> 573492e6949393101889c54759640e6d849831e1
