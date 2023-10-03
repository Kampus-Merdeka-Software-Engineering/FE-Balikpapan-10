let saveMessage = document.getElementsByClassName('popUpSave')[0];
// let form = document.getElementsByTagName('form')[0];
let btnCon = document.getElementById('btnConfirm');
let btnSave = document.getElementsByClassName('btnSave')[0];
let btnCancel = document.getElementsByClassName('btnCancel')[0];
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let newPass = document.getElementById('new-pass');
let confirmPass = document.getElementById('confirm-pass');
let form = document.getElementById('form');
let error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(firstName.value)
    
    validatePass();
});

const popUpSave = () => {
    saveMessage.style.display = 'flex';
    form.style.filter = 'blur(3px)';
    document.body.classList.add('stop-scrolling');
    form.style.overflow = 'hidden';
}

const validatePass = () => {
    const pass1 = newPass.value;
    const pass2 = confirmPass.value;
    if(pass1 === pass2){
        error.innerText = '';
        popUpSave();
    }
    else{
        error.innerText = 'Password not match!';
    }
}

btnSave.addEventListener('click', () => {
    
    location.href = './index.html';
})

btnCancel.addEventListener('click', () => {
    saveMessage.style.display = 'none';
    form.style.filter = 'blur(0)';
    document.body.classList.remove("stop-scrolling");
})
