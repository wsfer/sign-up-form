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