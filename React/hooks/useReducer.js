let hookIndex = 0
const hookStates = []

export const useReducer = (reducer, initValue) => {
    const curIndex = hookIndex
    hookStates[curIndex] = hookStates[curIndex] ?? initValue
    const dipatch = (action) => {
        hookStates[curIndex] = reducer(hookStates[curIndex], action)
        render()
    }
    return [hookStates[hookIndex++], dipatch]
}