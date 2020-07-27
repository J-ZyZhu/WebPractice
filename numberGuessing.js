function factorial(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }

}

console.log(factorial(4));

function name(input) {

    let newStr = input.replace("-", "_", -1);
    return newStr;
}
console.log(name("js-hsas"));