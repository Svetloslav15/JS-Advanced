const expect = require("chai").expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}


describe("Sum tests", function () {
    it('should return 7 for [1, 2, 4]', function () {
        let array = [1, 2, 4];
        let result = sum(array);
        expect(result).to.be.equal(7);
    });
});