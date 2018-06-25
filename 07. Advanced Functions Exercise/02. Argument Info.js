function argumentInfo() {
    let typeCount = {};
    for (let arg of arguments) {
        let type = typeof arg;
        if (!typeCount.hasOwnProperty(type)){
            typeCount[type] = 0;
        }
        let oldValue = typeCount[type];
        typeCount[type] = oldValue + 1;
        console.log(`${type}: ${arg}`);
    }
    let arr = Object.keys(typeCount).sort((a, b) => typeCount[b] - typeCount[a]);

    for (let index = 0; index < arr.length; index++) {
        console.log(`${arr[index]} = ${typeCount[arr[index]]}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })