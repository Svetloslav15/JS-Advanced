function solution(arr) {
    let processor = (function () {
        let result = [];
        function add(word) {
            result.push(word);
        }
        function remove(word) {
            result = result.filter(x => x !== word);
        }
        function print() {
            console.log(result.join(','));
        }
        return {add, remove, print};
    }());
    for (let el of arr) {
        let [command, word] = el.split(' ');
        processor[command](word);
    }
}