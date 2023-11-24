let hookIndex = 0
const hookStates = []

export const useMemo = (callback, deps) => {
    if (hookStates[hookIndex]) {
        const [preMemo, preDeps] = hookStates[hookIndex]
        const isChanged = preDeps.some((dep, index) => dep !== deps[index])
        if (isChanged) {
            hookStates[hookIndex++] = deps
            return callback()
        } else {
            hookIndex++
            return preMemo
        }
    } else {
        const memo = callback()
        hookStates[hookIndex++] = [memo, deps]
        return memo
    }
}