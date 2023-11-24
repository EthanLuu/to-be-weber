let hookIndex = 0
const hookStates = []

export const useEffect = (callback, deps) => {
    if (hookStates[hookIndex]) {
        // 非初始调用
        const preDeps = hookStates[hookIndex]
        const isChanged = deps.some((dep, index) => dep !== preDeps[index])
        // 只在依赖项发生改变的时候重新执行 callback，并且更新依赖项
        if (isChanged) {
            callback()
            hookStates[hookIndex++] = deps
        } else {
            hookIndex++
        }
    } else {
        // 初始调用
        callback()
        hookStates[hookIndex++] = deps
    }
}