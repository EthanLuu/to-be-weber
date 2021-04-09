// 手写模板字符串
const render = (template, data) => {
  const reg = /\{\{(\w+)\}\}/
  if (reg.test(template)) {
    // 如果字符串中包含了模板字符串
    const name = reg.exec(template)[1] // 获取对应的名字
    template = template.replace(reg, data[name])
    return render(template, data)
  }
  return template
}

const template = 'I am {{name}}, {{age}} years old.'
const person = {
  name: 'ethan',
  age: 21,
}
console.log(render(template, person))
