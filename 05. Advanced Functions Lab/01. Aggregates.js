function aggregates(arr) {
    console.log("Sum = " + arr.reduce((a, b) => a + b));
    console.log("Min = " + Math.min(arr));
    console.log("Max = " + Math.max(arr));
    console.log("Product = " + arr.reduce((a, b) => a * b));
    console.log("Join = " + arr.map(x => x.toString()).join(""));
}
aggregates([2, 3, 10, 5]);