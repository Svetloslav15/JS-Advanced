const expect = require("chai").expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("LookUpChar", function () {
    it('should return char at index 2', function () {
        let string = "hello";
        let result = lookupChar(string, 2);
        expect(result).to.be.equal("l");
    });
    it('should return undefined at index 0', function () {
        let string = "pesho";
        let result = lookupChar(string, 5.3);
        expect(result).to.be.equal(undefined);
    });
    it('should return Incorrect index at index -1', function () {
        let string = "hello";
        let result = lookupChar(string, -1);
        expect(result).to.be.equal("Incorrect index");
    });
    it('should return Incorrect index at index -1', function () {
        let string = "hello";
        let result = lookupChar(string, 12);
        expect(result).to.be.equal("Incorrect index");
    });
    it('should return undefined at index 3', function () {
        let string = 23.5;
        let result = lookupChar(string, 3);
        expect(result).to.be.equal(undefined);
    });
    it('should return undefined at index 3', function () {
        let string = ["array", "hello"];
        let result = lookupChar(string, 1);
        expect(result).to.be.equal(undefined);
    });
});