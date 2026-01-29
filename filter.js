let arr = [1, 2, 3, 4, 5, , 6];

Array.prototype.myFilter = function (callback) {
    if (typeof (callback) === "Function") {
        throw new Error("callback is not a function");
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            const value = this[i];
            const newValue = callback(value, i, this);

            if (newValue) {
                result.push(this[i]);
            }
        }
    }
    return result;
}

function transformArray(elem) {
    return elem % 2 === 0
}

const result = arr.myFilter(transformArray);
console.log(result);

// in original its uses while loop instead of for
