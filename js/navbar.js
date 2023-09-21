let popup = document.getElementsByClassName('popup')[0];
let btnLogin = document.getElementById('login');
let dropClass = document.getElementsByClassName('classes-content')[0];
let icon = document.getElementsByClassName('icon')[0];
let nav = document.getElementById('navbar');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex'
    console.log('clicked');
});

document.getElementsByClassName('close')[0].addEventListener('click', () => {
    popup.style.display = 'none';
})

icon.addEventListener('click', (e) => {
    e.preventDefault();
    if(nav.className === "nav-menu"){
        nav.className += " responsive";
    }
    else{
        nav.className = "nav-menu";
    }
})