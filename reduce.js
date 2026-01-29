const arr = [1, 2, 3, 4, 5, 8];

Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof (callback) !== "function") {
        throw new Error("callback is not a function")
    }

    if (this == null) {
        throw new Error("invalid data")
    }

    const hasInitial = initialValue !== undefined;

    if (this.length === 0 && !hasInitial) {
        throw new Error("Reduce of empty array with no initial value");
    }

    let accumulator = hasInitial ? initialValue : this[0];
    const startIndex = hasInitial ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        //  if (!(i in this)) continue;
        if (this.hasOwnProperty(i)) {
            const currentValue = this[i];
            accumulator = callback(accumulator, currentValue, i, this);
        }
    }

    return accumulator
}

const result = arr.myReduce(function (acc, cur) {
    return acc + cur;
}, 7);

console.log(result)
