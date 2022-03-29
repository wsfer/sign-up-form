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
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#psw-confirm');