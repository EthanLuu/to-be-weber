let ref

const useRef = (initValue) => {
    ref = ref ?? { current: initValue }
    return ref
}