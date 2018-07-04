const expect = require("chai").expect;
const Sumator = require("../02. Sumator Class");

describe("Sumator Class Tests", function () {
    describe("Initializating Test", function () {
        it('should return an empty []', function () {
            let s = new Sumator();
            expect(s.data).to.be.an("array");
            expect(s.data.length).to.be.equal(0);
            expect(s.data).to.be.empty;
        });
    });
    describe("Add item Tests", function () {
        let sumator;
        beforeEach(function () {
           sumator = new Sumator();
        });
        it('should return s.data[0] to be 6', function () {
            sumator.add(6);
            expect(sumator.data[0]).to.be.equal(6);
        });
        it('should return s.data[0] to be 6.6', function () {
            sumator.add(6.6);
            expect(sumator.data[0]).to.be.equal(6.6);
        });
        it('should return s.data[0] to be text', function () {
            sumator.add("text");
            expect(sumator.data[0]).to.be.equal("text");
        });
        it('should return s.data[0] to be [pesho, 6]', function () {
            sumator.add(["pesho", 6]);
            expect(sumator.data[0]).to.deep.equal(["pesho", 6]);
        });
        it('should return s.data[0] to be {name: Stamat}', function () {
            sumator.add({name: "Stamat"});
            expect(sumator.data[0]).to.deep.equal({name: "Stamat"});
        });
    });
    describe("Sum Nums tests", function () {
       let sumator;
        beforeEach(function () {
           sumator = new Sumator();
        });
        it('should return 0 for ["pesho", "gosho", "stamat"]', function () {
            sumator.data = ["pesho", "gosho", "stamat"];
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it('should return 10 for [2, -9, 17]', function () {
            sumator.data = [2, -9, 17];
            expect(sumator.sumNums()).to.be.equal(10);
        });
        it('should return -1 for -1', function () {
            sumator.data = [-1];
            expect(sumator.sumNums()).to.be.equal(-1);
        });

    });
    describe("Remove By Filter Tests", function () {
        let sumator;
        beforeEach(function () {
            sumator = new Sumator();
            sumator.add(6);
            sumator.add([]);
            sumator.add({});
            sumator.add(3);
            sumator.add("text");
        });
        it('should return 4', function () {
           sumator.removeByFilter((x) => Array.isArray(x));
           expect(sumator.data.length).to.be.equal(4);
        });
        it('should return 4', function () {
            sumator.removeByFilter((x) => typeof x === "string");
            expect(sumator.data.length).to.be.equal(4);
        });
        it('should return 3', function () {
            sumator.removeByFilter((x) => typeof x === "number");
            expect(sumator.data.length).to.be.equal(3);
        });
        it('should return 3', function () {
            sumator.removeByFilter((x) => x % 2 === 0);
            expect(sumator.data.length).to.be.equal(3);
        });
        it('should return 2', function () {
            sumator.removeByFilter((x) => x % 2 !== 0);
            expect(sumator.data.length).to.be.equal(2);
        });
        it('should return 5', function () {
            sumator.removeByFilter((x) => x === null);
            expect(sumator.data.length).to.be.equal(5);
        });
    });
    describe("toString Tests", function () {
        let sumator;
        beforeEach(function () {
            sumator = new Sumator();
        });
        it('should return (empty)', function () {
            expect(sumator.toString()).to.be.equal("(empty)");
        });
        it('should return "text", 5, "Stamat", 0, -6.3', function () {
            let items = ["text", 5, undefined, 0, -6.3, {name: "Stamat"},new Date(2018, 7, 4)];
            items.forEach(el => {
               sumator.data.push(el);
            });
            let expectedOutput = items.join(", ");
            expect(sumator.toString()).to.be.equal(expectedOutput);
        });
    });
});