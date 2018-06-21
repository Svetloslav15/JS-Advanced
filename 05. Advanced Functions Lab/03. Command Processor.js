function commandProcessor(arr) {
    let processor = (function () {
        let result = '';
        return {
            'append':(st) => {result += st},
            'removeStart':(num) => {result = result.substring(num)},
            'removeEnd':(num) => {result = result.substring(0, result.length - num)},
            'print':() => {console.log(result);},

        }
    }());
    for (let com of arr) {
        let[command, item] = com.split(" ");
        processor[command](item);
    }
}