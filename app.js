// // test cases 
// const sample1 = [1, 2, 3, 4]; // [2,4,6,8]
// const sample2 = new Array(10); // [empty * 10]
// const sample3 = [1, , ,2, , ,3, 4]; // [2, empty × 2, 4, empty × 2, 6, 8]
// const sample4 = {length: 2, 0:10, 1:20, 3:30 }; //[20, 40]

// const result1 = sample1.map((d) => d * 2);
// const result2 = sample2.map((d) => d * 2);
// const result3 = sample3.map((d) => d * 2);
// const result4 = Array.prototype.map.call(sample4, (d) => d * 2);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);




const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (callback) {
    if (typeof (callback) === "Function") {
        throw new Error("callback is not a function")
    }
    const result = [];

    for (let i = 0; i < this.length; i++) {
        const value = this[i];
        const newValue = callback(value, i, this);
        result.push(newValue);
    }
    return result;
}

function transformArray(elem) {
    return elem + elem;
}

const result = arr.myMap(transformArray)

// test cases
// const sample1 = [1, 2, 3, 4]; // [2,4,6,8]
// const sample2 = new Array(10); // [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
// const sample3 = [1, , ,2, , ,3, 4]; // [2, NaN, NaN, 4, NaN, NaN, 6, 8]
// const sample4 = {length: 2, 0:10, 1:20, 3:30 }; //[20, 40]

// const result1 = sample1.myMap((d) => d * 2);
// const result2 = sample2.myMap((d) => d * 2);
// const result3 = sample3.myMap((d) => d * 2);
// const result4 = Array.prototype.myMap.call(sample4, (d) => d * 2);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);


Array.prototype.myMap2 = function (callback) {
    if (typeof (callback) === "Function") {
        throw new Error("callback is not a function")
    }
    const result = [];

    let i = 0;
    while (i < this.length) {
        const value = this[i];
        const newValue = callback(value, i, this)
        result.push(newValue);
        i++
    }
    return result;
}

function transformArray2(elem) {
    return elem * elem
}

const resultOfMyMap2 = arr.myMap2(transformArray2)

// test cases
const sample1 = [1, 2, 3, 4]; // [2,4,6,8]
const sample2 = new Array(10); // [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
const sample3 = [1, , ,2, , ,3, 4]; // [2, NaN, NaN, 4, NaN, NaN, 6, 8]
const sample4 = {length: 2, 0:10, 1:20, 3:30 }; //[20, 40]

const result1 = sample1.myMap2((d) => d * 2);
const result2 = sample2.myMap2((d) => d * 2);
const result3 = sample3.myMap2((d) => d * 2);
const result4 = Array.prototype.myMap2.call(sample4, (d) => d * 2);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
