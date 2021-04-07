document.querySelector('#image').addEventListener('mouseenter', enterHandler)-0
document.querySelector('#image').addEventListener('mousemove', moveHandler)
document.querySelector('#image').addEventListener('mouseleave', leaveHandler)

function enterHandler(e) {
  e.target.setAttribute('zoomed', 1)
}
function moveHandler(e) {
    let rect = e.target.getBoundingClientRect()
    let x = e.offsetX / rect.width
    let y = e.offsetY / rect.height
    e.target.style.setProperty('--x', x)
    e.target.style.setProperty('--y', y)
}
function leaveHandler(e) {
  e.target.removeAttribute('zoomed', 1)
}
