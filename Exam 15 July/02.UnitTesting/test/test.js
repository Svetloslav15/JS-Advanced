const expect = require("chai").expect;
const Calculator = require("../solution");

describe("Calculator Tests", function () {
    describe("Initializing Tests", function () {
        let calculator;
        beforeEach(function () {
            calculator = new Calculator();
        });
        it('should have prop expenses', function () {
            expect(calculator.expenses).to.exist;
        });
        it('should check if is array', function () {
            expect(Array.isArray(calculator.expenses)).to.be.equal(true);
        });
        it('should check expenses length', function () {
            expect(calculator.expenses.length).to.be.equal(0);
        });
    });
    describe("Add Tests", function () {
        let calculator;
        beforeEach(function () {
            calculator = new Calculator();
        });
        it('should add data of any type', function () {
            calculator.add(5);
            calculator.add(0);
            calculator.add(-1);
            calculator.add(2.3);
            calculator.add(new Date());
            calculator.add("text");
            calculator.add(["JS", "C#"]);
            calculator.add({name: "Svetli"});
            expect(calculator.expenses.length).to.be.equal(8);
        });
    });
    describe("DivideNum Tests", function () {
        let calculator;
        beforeEach(function () {
            calculator = new Calculator();
        });
        it('should divide nums correctly 1', function () {
            calculator.add(10);
            calculator.add(5);
            let result = calculator.divideNums();
            expect(result).to.be.equal(2);
        });
        it('should divide nums correctly 2', function () {
            calculator.add(10);
            calculator.add(2.5);
            let result = calculator.divideNums();
            expect(result).to.be.equal(4);
        });
        it('should divide nums correctly 3', function () {
            calculator.add(10);
            let result = calculator.divideNums();
            expect(result).to.be.equal(10);
        });
        it('should divide nums correctly 4', function () {
            calculator.add(10);
            calculator.add("text");
            calculator.add(-2);
            let result = calculator.divideNums();
            expect(result).to.be.equal(-5);
        });
        it('should return message', function () {
            calculator.add(2);
            calculator.add(0);
            let result = calculator.divideNums();
            expect(result).to.be.equal('Cannot divide by zero');
        });
        it('should throw error', function () {
            calculator.add("text1");
            calculator.add("text2");
            expect(() => calculator.divideNums()).to.throw(Error);
        });
    });
    describe("toString Tests", function () {
        let calculator;
        beforeEach(function () {
            calculator = new Calculator();
        });
        it('should join correctly', function () {
            calculator.add(5);
            calculator.add(0);
            calculator.add(-1);
            calculator.add(2.3);
            calculator.add("text");
            calculator.add(["JS", "C#"]);
            calculator.add({name: "Svetli"});
            expect(calculator.toString()).to.be.eql("5 -> 0 -> -1 -> 2.3 -> text -> JS,C# -> [object Object]");
        });
        it('should return text empty string', function () {
            expect(calculator.toString()).to.be.equal("empty array");
        });
    });
    describe("OrderBy Tests", function () {
        let calculator;
        beforeEach(function () {
            calculator = new Calculator();
        });
        it('should sort only numbers', function () {
            calculator.add(5);
            calculator.add(8);
            calculator.add(1);
            calculator.add(-9);
            calculator.add(5.63);
            expect(calculator.orderBy()).to.be.equal("-9, 1, 5, 5.63, 8");
        });
        it('should order only strings', function () {
            calculator.add("text");
            calculator.add("input");
            calculator.add("javaScript");
            expect(calculator.orderBy()).to.be.equal("input, javaScript, text");
        });
        it('should order mixed', function () {
            calculator.add(5);
            calculator.add(8);
            calculator.add(1);
            calculator.add(-9);
            calculator.add(5.63);
            calculator.add("text");
            calculator.add("input");
            calculator.add("javaScript");
            expect(calculator.orderBy()).to.be.equal("-9, 1, 5, 5.63, 8, input, javaScript, text");
        });
    });
});