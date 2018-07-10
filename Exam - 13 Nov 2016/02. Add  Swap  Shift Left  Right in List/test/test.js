const expect = require("chai").expect;
const createList = require("../program");

describe("CreateList tests", function () {
    let list = {};
    beforeEach(function () {
        list = new createList();
    });
    it('should be valid', function () {
        expect(list.add).to.exist;
        expect(list.shiftLeft).to.exist;
        expect(list.shiftRight).to.exist;
        expect(list.swap).to.exist;
        expect(list.toString).to.exist;
    });
    it('should add valid variables', function () {
        list.add(5);
        list.add(5.3);
        list.add(0);
        list.add(["hello", {}]);
        list.add("text");
        list.add(true);
        let result = list.toString();
        expect(result).to.be.equal("5, 5.3, 0, hello,[object Object], text, true");
    });
    it('should check shift left', function () {
        list.add(5);
        list.add(5.3);
        list.add(0);
        list.add(["hello", {}]);
        list.add("text");
        list.shiftLeft();
        list.shiftLeft();
        let result = list.toString();
        expect(result).to.be.equal("0, hello,[object Object], text, 5, 5.3");
    });
    it('should check shift right', function () {
        list.add(5);
        list.add(5.3);
        list.add(0);
        list.add(["hello", {}]);
        list.add("text");
        list.shiftRight();
        list.shiftRight();
        let result = list.toString();
        expect(result).to.be.equal("hello,[object Object], text, 5, 5.3, 0");
    });
    it('should check mixed shifts', function () {
        list.add(5);
        list.add(5.3);
        list.add(0);
        list.add(["hello", {}]);
        list.add("text");
        list.shiftRight();
        list.shiftLeft();
        list.shiftRight();
        list.shiftLeft();
        let result = list.toString();
        expect(result).to.be.equal("5, 5.3, 0, hello,[object Object], text");
    });
    it('should check swaps', function () {
        list.add("input");
        list.add(0);
        list.add(5.3);
        list.swap(0, 2);
        let result = list.toString();
        expect(result).to.be.equal("5.3, 0, input")
    });
    it('should check swaps', function () {
        list.add("input");
        list.add(0);
        list.add(5.3);
        list.swap(0, 12);
        let result = list.toString();
        expect(result).to.be.equal("input, 0, 5.3");
    });
    it('should check swaps', function () {
        list.add("input");
        list.add(0);
        list.add(5.3);
        list.swap(10, 1);
        let result = list.toString();
        expect(result).to.be.equal("input, 0, 5.3");
    });
    it('should check swaps', function () {
        list.add("input");
        list.add(0);
        list.add(5.3);
        list.swap(10);
        let result = list.toString();
        expect(result).to.be.equal("input, 0, 5.3");
    });
    it('should check swaps', function () {
        list.add("input");
        list.add(0);
        list.add(5.3);
        list.swap("invalid", 2);
        let result = list.toString();
        expect(result).to.be.equal("input, 0, 5.3");
    });
    it('should check swaps', function () {
        list.add("input");
        list.add(0);
        list.add(5.3);
        list.swap("invalid", -2);
        let result = list.toString();
        expect(result).to.be.equal("input, 0, 5.3");
    });
    it('should check swaps', function () {
        list.add("input");
        list.add(0);
        list.add(5.3);
        list.swap(2, "invalid");
        let result = list.toString();
        expect(result).to.be.equal("input, 0, 5.3");
    });
    it('should check swaps', function () {
        list.add("input");
        list.add(0);
        list.add(5.3);
        list.swap(-2, "invalid");
        let result = list.toString();
        expect(result).to.be.equal("input, 0, 5.3");
    });
    it('should check swaps', function () {
        list.add("input");
        list.add(0);
        list.add(5.3);
        list.swap(1, 1);
        let result = list.toString();
        expect(result).to.be.equal("input, 0, 5.3");
    });
    it('should return 0', function () {
        list.add("input");
        list.add(0);
        list.add(5.3);
        list.swap(1, 0);
        let result = list.toString();
        expect(result).to.be.equal("0, input, 5.3");
    });
    it('with second index equal to number of elements, should return false', function () {
        list.add('one');
        list.add('two');
        list.add('three');
        list.swap(0, 3);
        let result = list.toString();
        expect(result).to.equal("one, two, three");
    });
    it('with equal indexes, should return false', function () {
        list.add('one');
        list.add('two');
        list.add('three');
        expect(list.swap(1, 1)).to.equal(false);
    });
});