let imgList = [...document.querySelectorAll('img')]
const length = imgList.length

const lazyLoad = () => {
  let count = 0
  return (() => {
    const deleteList = []
    imgList.forEach((img, index) => {
      const rect = img.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        // 图片在视口内
        img.src = img.dataset.src
        deleteList.push(index)
        count++
        if (count == length) {
          document.removeEventListener('scroll', lazyLoad)
        }
      }
    })
    console.log(1)
    imgList = imgList.filter((_, index) => !deleteList.includes(index))
  })()
}

document.addEventListener('scroll', lazyLoad)
