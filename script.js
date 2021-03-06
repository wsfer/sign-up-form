//Dark theme script.
let themeSelector = document.querySelector('.theme');
themeSelector.addEventListener('click', changeTheme);

function changeTheme () {
    let doc = document.documentElement;
    if(doc.classList == 'light') {
        doc.classList = 'dark';
        themeSelector.textContent = 'Toggle Light Mode';
    } else {
        doc.classList = 'light'
        themeSelector.textContent = 'Toggle Dark Mode';
    }
}

//Form validation scripts.
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#psw-confirm');
let pswErrorMsg = document.querySelector('.psw-error');

passwordConfirm.addEventListener('focusout', checkPassword);
passwordConfirm.addEventListener('focusin', () => pswErrorMsg.style.visibility = "hidden");
password.addEventListener('focusout', checkPassword)

function checkPassword () {
    if (!passwordConfirm.value || password.value == passwordConfirm.value) {
        pswErrorMsg.style.visibility = "hidden";
        passwordConfirm.classList.remove('invalid-password');
    } else {
        pswErrorMsg.style.visibility = "visible";
        passwordConfirm.classList.add('invalid-password');
    }
}

window.onload = function () {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
    password.value = '';
    passwordConfirm.value = '';

}