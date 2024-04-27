const checkBox = document.querySelector("#theme-toggle");
const setTheme = localStorage.getItem('theme');
const dataTheme = document.documentElement.getAttribute("data-color-theme");
const rootElement = document.documentElement;


if(dataTheme === "default-browser") {
    checkBox.checked = false;
} else if(dataTheme === "dark") {
    checkBox.checked = true;
    localStorage.setItem('theme', 'dark');
} else if(dataTheme === "light") {
    checkBox.checked = false;
    localStorage.setItem('theme', 'light');
}

function switchTheme(event) {
    if(event.target.checked) {
        rootElement.setAttribute("data-color-theme", "dark");
        localStorage.setItem('theme', 'dark');
    } else {
        rootElement.setAttribute("data-color-theme", "light");
        localStorage.setItem('theme', 'light');
    }
}



checkBox.addEventListener('click', switchTheme, false);
