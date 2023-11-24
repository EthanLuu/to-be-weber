Function.prototype.myBind = function (context, ...args) {
    const _this = this;
    const fn = function (...newArgs) {
        _this.apply(
            this instanceof _this ? this : context,
            args.concat(Array.prototype.slice.call(newArgs))
        )
    }
    fn.prototype = Object.create(_this.prototype)
    return fn;
}

const person = {
    name: "ethan",
    height: 170
}

function grow(h) {
    this.height += h;
}

const newGrow = grow.bind(person);
newGrow(10);
console.log(person);

newGrow(1);
console.log(person)