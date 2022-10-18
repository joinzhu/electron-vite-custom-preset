window.addEventListener('DOMContentLoaded', () => {
  const replaceTxt = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerHTML = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceTxt(`${dependency}-version`, process.versions[dependency])
  }
})
