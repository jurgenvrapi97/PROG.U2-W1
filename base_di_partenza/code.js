window.onscroll = function () {
  myFunction()
}

function myFunction() {
  if (document.documentElement.scrollTop > 200) {
    const header = document.getElementsByTagName('header')[0]
    console.log(header)
    const button = document.getElementById('ciao')
    console.log(button)
    header.classList.add('white')
    button.classList.add('green')
  } else {
    const header = document.getElementsByTagName('header')[0]
    header.classList.remove('white')
    const button = document.getElementById('ciao')
    button.classList.remove('green')
  }
}
