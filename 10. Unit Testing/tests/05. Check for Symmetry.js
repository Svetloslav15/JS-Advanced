const expect = require("chai").expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}


describe("isSymetric()", function () {
    describe("True tests", function () {
        it('should return true for [1 ,2, 1]', function () {
            let array = [1, 2, 1];
            let result = isSymmetric(array);
            expect(result).to.be.equal(true);
        });
        it('should return true for [-1 ,2, -1]', function () {
            let array = [-1, 2, -1];
            let result = isSymmetric(array);
            expect(result).to.be.equal(true);
        });
        it('should return true for [1]', function () {
            let array = [1];
            let result = isSymmetric(array);
            expect(result).to.be.equal(true);
        });
        it('should return true for [5, "hi", {a:5}, new Date(), {a:5}, "hi", 5]', function () {
            let array = [5, "hi", {a:5}, new Date(), {a:5}, "hi", 5];
            let result = isSymmetric(array);
            expect(result).to.be.equal(true);
        });
    });
    describe("False tests", function () {
        it('should return false for [1, hi, new Date(), hi, -1]', function () {
            let array = [1, "hi", new Date(), "hi", -1];
            let result = isSymmetric(array);
            expect(result).to.be.equal(false);
        });
        it('should return false for [1, 2, 3]', function () {
            let array = [1, 2, 3];
            let result = isSymmetric(array);
            expect(result).to.be.equal(false);
        });
        it('should return false for string', function () {
            let array = "string";
            let result = isSymmetric(array);
            expect(result).to.be.equal(false);
        });
    })
});