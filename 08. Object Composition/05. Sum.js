function sum() {
    let processor = (function () {
        let element1;
        let element2;
        let resultElement;
        function init(selector1, selector2, selector3) {
            element1 = $(selector1);
            element2 = $(selector2);
            resultElement = $(selector3);
        }
        function add() {
            resultElement = +(element1).text + +(element2).text;
        }
        function subtract() {
            resultElement = +(element1).text - +(element2).text;
        }
        return {add, subtract, init};
    }());
}