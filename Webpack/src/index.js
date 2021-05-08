import _ from 'lodash'
import './index.css'
import printMe from './print'

const component = () => {
  let element = document.createElement('div')
  let btn = document.createElement('button')
  element.innerHTML = _.join(['Hello', 'World'], ',')

  btn.innerHTML = 'Click me'

  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
