let observer = new MutationObserver((mutationRecords) => {
  console.log(mutationRecords)
})

const elem = document.querySelector('#elem')

observer.observe(elem, {
  childList: true,
  subtree: true,
  characterDataOldValue: true,
})

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
  elem.textContent = 'wow'
})
