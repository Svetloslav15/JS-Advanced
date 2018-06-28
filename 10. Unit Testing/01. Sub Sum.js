function subSum(arr, start, end) {
    if (!Array.isArray(arr)){
        return NaN;
    }
    if (start < 0){
        start = 0;
    }
    if (end >= arr.length){
        end = arr.length - 1;
    }
    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum += Number(arr[index]);
    }
    return sum;
}

console.log(subSum([1, "two", 3]), 0, 2);