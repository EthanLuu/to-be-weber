let hookIndex = 0
const hookStates = []

const render = () => {
    console.log('render the page')
}

export const useState = (initValue) => {
    // 记录当前 state 对应的 index
    const curIndex = hookIndex

    // 保存当前的 state
    hookStates[curIndex] = hookStates[curIndex] ?? initValue

    const setState = (newValue) => {
        if (typeof newValue === 'function') {
            hookStates[curIndex] = newValue(hookStates[curIndex])
        } else {
            hookStates[curIndex] = newValue
        }
        render()
    }

    return [hookStates[hookIndex++], setState]
}