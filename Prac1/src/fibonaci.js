var fibonaci = function (n) {
    if (n == 1) {
        return [1];
    }
    if (n == 2) {
        return [1, 1];
    }
    var arr = fibonaci(n - 1);
    arr.push(arr[n - 2] + arr[n - 3]);
    return arr;
};
console.log(fibonaci(10).reduce(function (cur, res) {
    return cur += res;
}, 0));
