const expect = require("chai").expect;
const sum = require("../04. Sum of nums");


describe("Sum tests", function () {
    it('should return 7 for [1, 2, 4]', function () {
        let array = [1, 2, 4];
        let result = sum(array);
        expect(result).to.be.equal(7);
    });
    it('should return 4.2 for [1, 2.3, 0.9]', function () {
        let array = [1, 2.3, 0.9];
        let result = sum(array);
        expect(result).to.be.equal(4.2);
    });
    it('should return 0 for []', function () {
        let array = [];
        let result = sum(array);
        expect(result).to.be.equal(0);
    });
    it('should return NaN for [1, "pesho"]', function () {
        let array = [1, "pesho"];
        let result = sum(array);
        expect(result).to.be.NaN;
    });

});