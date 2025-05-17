const rootElement = document.documentElement
rootElement.classList.add('light')

const darkLightThemeToggle = document.querySelector('#dark-light-theme-toggle')
console.log(darkLightThemeToggle)


darkLightThemeToggle.addEventListener('click', (e) => {
  if (rootElement.className === 'light') {
    rootElement.classList.remove('light')
    rootElement.classList.add('dark')
    e.target.textContent = 'Light'
  } else {
    rootElement.classList.remove('dark')
    rootElement.classList.add('light')
    e.target.textContent = 'Dark'
  }
})