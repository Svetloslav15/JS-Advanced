const expect = require("chai").expect;
const mathEnforcer = require("../04. Math Enforcer").mathEnforcer;

let enforcer;
beforeEach(function () {
    enforcer = mathEnforcer;
});
describe("Math Enforcer", function () {
    describe("addFive", function () {
        it('should return 10 after 5 + 5', function () {
            let result = enforcer.addFive(5);
            expect(result).to.be.equal(10);
        });
        it('should return 0 after -5.3 + 5', function () {
            let result = enforcer.addFive(-5);
            expect(result).to.be.equal(0);
        });
        it('should return 6.3 after 6.3 + 5', function () {
            let result = enforcer.addFive(6.3);
            expect(result).to.be.closeTo(11.3, 0.1);
        });
        it('should return undefined after text', function () {
            let result = enforcer.addFive("text");
            expect(result).to.be.equal(undefined);
        });
        it("should return correct result for floating point parameter", function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    });
    describe("subtractTen", function () {
        it('should return 2 after 12 - 10', function () {
            let result = enforcer.subtractTen(12);
            expect(result).to.be.equal(2);
        });
        it('should return -22 after -12 - 10', function () {
            let result = enforcer.subtractTen(-12);
            expect(result).to.be.equal(-22);
        });
        it('should return 12.15 after 22.15 - 10', function () {
            let result = enforcer.subtractTen(22.15);
            expect(result).to.be.closeTo(12.15, 0.01);
        });
        it('should return undefined after text', function () {
            let result = enforcer.subtractTen("text");
            expect(result).to.be.equal(undefined);        });
    });
    describe("sum", function () {
        it('should return 13 after 6 + 8', function () {
            let result = enforcer.sum(5, 8);
            expect(result).to.be.equal(13);
        });
        it('should return 6.5 after 5.3 + 1.2', function () {
            let result = enforcer.sum(5.3, 1.2);
            expect(result).to.be.equal(6.5);
        });
        it('should return undefined after text + 1.2', function () {
            let result = enforcer.sum("text", 1.2);
            expect(result).to.be.equal(undefined);
        });
        it('should return undefined after text + 1.2', function () {
            let result = enforcer.sum(2, "text");
            expect(result).to.be.equal(undefined);
        });
    });
});