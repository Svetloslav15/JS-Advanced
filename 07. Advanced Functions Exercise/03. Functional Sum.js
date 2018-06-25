function add(num1) {
    let sum = num1;

    function calculate(num) {
        sum += num;
        return calculate;
    }

    calculate.toString = function() { return sum };
    return calculate;
}