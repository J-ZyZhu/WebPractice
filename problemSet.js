// Q1
let arr = [1,2,3,4]
function printReverse(arr){
    for(i=arr.length-1; i>=0;i--){
        console.log(arr[i])
    }
}
printReverse(arr)

//Q2
let arr1 = [2,2,3]
function isUniform(arr) {
    for(i = 0; i<arr.length-1;i++){
        if(arr[i]!== arr[i+1])
        return false
    }
    return true
}
console.log(isUniform(arr1))

//Q3

function sumArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    return sum
}
console.log(sumArray(arr1))

