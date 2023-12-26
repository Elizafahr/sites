//перенос по ссылкам в навигации
let links = document.querySelectorAll('.navigation-btn > a')
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' })
  }
}

var theToggle = document.getElementById('toggle')

var smallToggle = document.getElementById('smalltoggle')

// hasClass
function hasClass (elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ')
}
// addClass
function addClass (elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className
  }
}
// removeClass
function removeClass (elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' '
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ')
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '')
  }
}
// toggleClass
function toggleClass (elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' '
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ')
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '')
  } else {
    elem.className += ' ' + className
  }
}

theToggle.onclick = function () {
  toggleClass(this, 'on')
  return false
}

smallToggle.onclick = function () {
  toggleClass(this, 'on')
  return false
}
