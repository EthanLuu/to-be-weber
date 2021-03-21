// function foo() {
//     console.log(this.a)
// }

// window.a = 1
// foo()

// const obj = {
//     a: 2,
//     foo: foo
// }

// obj.foo()

// const c = new foo()

// console.log(c)

const a = {
    name: 'ethan',
    fn: function (a, b) {
        console.log(a + b)
    }
}

const b = a.fn;
b.apply(a, [1, 2]) // 3
b.call(a, 3, 4) // 7

// function a() {
//     return () => {
//         return () => {
//             console.log(this)
//         }
//     }
// }

// console.log(a()()())