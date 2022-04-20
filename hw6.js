let arr = [15.5, 2.3, 1.1, 4.7];

let sum = arr.reduce(function (a, b) {
        return Math.round(a + b);
    });
    console.log(sum);