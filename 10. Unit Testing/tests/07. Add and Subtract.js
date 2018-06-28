const expect = require("chai").expect;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

let calculator;
beforeEach(function () {
    calculator = createCalculator();
});
describe("Create calculator tests", function () {
    it("should return 0 for initialization", function () {
        let result = calculator.get();
        expect(result).to.be.equal(0);
    });
    it("should return 5 for 2 + 3", function () {
        calculator.add(2);
        calculator.add(3);
        let result = calculator.get();
        expect(result).to.be.equal(5);
    });
    it("should return -5 for -2 -3", function () {
        calculator.subtract(2);
        calculator.subtract(3);
        let result = calculator.get();
        expect(result).to.be.equal(-5);
    });
    it("should return 4.2 for 5.3 - 1.1", function () {
        calculator.add(5.3);
        calculator.subtract(1.1);
        let result = +(calculator.get().toFixed(1));
        expect(result).to.be.equal(4.2);
    });
    it("should return 2 for 10 - 7 + 2 - 1", function () {
        calculator.add(10);
        calculator.subtract(7);
        calculator.add(-2);
        calculator.subtract(-1);
        let result = calculator.get();
        expect(result).to.be.equal(2);
    });
    it("should return NaN for adding strings", function () {
        calculator.add("hello");
        calculator.subtract("world");
        let result = calculator.get();
        expect(result).to.be.NaN;
    });
});