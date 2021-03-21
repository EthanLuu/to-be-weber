function Parent1() {
  this.name = 'p1';
  this.getName = function () {
    return this.name;
  }
}

function Child1() {
  Parent1.call(this);
  this.age = 1;
}

console.log(new Child1().getName());