function a() {
    const name = 'echo'
    function b() {
        console.log(name)
    }
    return b
}

const c = a()
c()


// 闭包的应用
function powerX(x) {
    return function (num) {
        return Math.pow(num, x);
    }
}

const power2 = powerX(2);
const power3 = powerX(3);
// console.log(power2(2));
// console.log(power3(2));
// console.log(power2(3));
// console.log(power3(3));


const Counter = (() => {
    var privateCounter = 0;
    const changeBy = (x) => {
        privateCounter += x;
    }
    return {
        increment: () => {
            changeBy(1);
        },
        decrement: () => {
            changeBy(-1);
        },
        value: () => {
            return privateCounter;
        }
    }
})();

console.log(Counter.value());
Counter.increment();
console.log(Counter.value());
Counter.decrement();
console.log(Counter.value());

for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)
}