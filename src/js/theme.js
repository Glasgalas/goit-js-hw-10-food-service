// список тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// переменная для выбора body страницы
const bodyRef = document.querySelector('body');

// переменная для выбора переключателя
const toggleRef = document.querySelector('#theme-switch-toggle');

// установка темы по умолчанию
function setDefaultTheme() {
  bodyRef.classList.add(Theme.LIGHT);
  const localSavedTheme = localStorage.getItem('theme');
  // если вернет null то ничего не произойдет и тема применится светлая по умолчанию, если вернет значение ранее сохраненной темы - она установится на body
  if (localSavedTheme) {
    bodyRef.classList.add(JSON.parse(localSavedTheme));
  }
}

// смена темы по переключению
function changeTheme() {
  if (toggleRef.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
}

// проверка какая тема установлена для правильного положения переключателя
function checkTheme() {
  if (bodyRef.classList.contains(Theme.DARK)) {
    toggleRef.checked = true;
    bodyRef.classList.remove(Theme.LIGHT);
  }
}
// слушатель событий на переключатель тем  и вызов функции на смену темы
toggleRef.addEventListener('change', changeTheme);

// установка темы по умолчанию
setDefaultTheme();

// запуск проверки установленной темы
checkTheme();
