// 实现浅拷贝的几种方式

// 1. 自写函数
const shallowClone = (target) => {
    if (typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {};
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                cloneTarget[prop] = target[prop];
            }
        }
        return cloneTarget;
    } else {
        return target;
    }
}

let a = [1, 2, { '3': 4 }];
let b = shallowClone(a);
// console.log(b); // [1, 2, {'3': 5}]
// a[2]['3'] = 5;
// console.log(b) // [1, 2, {'3': 5}]


// 2. Object.assign，拷贝的只是对象的属性的引用
let obj1 = { name: 'ethan', age: 3, games: ['GTA5'] };
const obj2 = Object.assign({}, obj1, { name: 'echo' });
// console.log(obj2); // { name: 'echo', age: 3, games: ['GTA5'] }
// obj1.games.push('LOL');
// console.log(obj2); // { name: 'echo', age: 3, games: ['GTA5', 'LOL'] }


// 3. concat 浅拷贝数组
let arr1 = [1, 2, { '3': 4 }];
let arr2 = arr1.concat();
// console.log(arr1); // [1, 2, {'3': 5}]
// arr1[2]['3'] = 5;
// console.log(arr2); // [1, 2, {'3': 5}]

// 4. slice 浅拷贝数组
let arr3 = arr1.slice();
// console.log(arr3);
// 5. 展开运算符
let arr4 = [...arr1];
// console.log(arr4);
