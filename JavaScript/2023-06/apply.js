Function.prototype.myApply = function (context, args) {
    context = context || window;
    const fn = Symbol('fn');
    context[fn] = this;
    const res = context[fn](...args);
    delete context[fn];
    return res;
}

const person = {
    name: "ethan",
    height: 170
}

function grow(h) {
    this.height += h;
}

grow.myApply(person, [10]);

console.log(person);
