const expect = require("chai").expect;
const makeList = require("../add left right clear");

describe("Make list tests", function () {
    let list = {};
    beforeEach(function () {
        list = new makeList();
    });
    describe("Initializing tests", function () {
        it('should return valid', function () {
            expect(list.addLeft).to.exist;
            expect(list.addRight).to.exist;
            expect(list.clear).to.exist;
            expect(list.toString()).to.exist;
        });
        it('should be empty', function () {
            expect(list.toString()).to.be.equal("");
        });
    });
    it('should test addLeft', function () {
        list.addLeft(5);
        list.addLeft(0);
        list.addLeft(-96);
        list.addLeft(["hello", "js"]);
        list.addLeft(5.32);
        list.addLeft({name: "Stamat", age: 16});
        expect(list.toString()).to.be.equal("[object Object], 5.32, hello,js, -96, 0, 5");
    });
    it('should test addRight', function () {
        list.addRight(5);
        list.addRight(0);
        list.addRight(-96);
        list.addRight(["hello", "js"]);
        list.addRight(5.32);
        list.addRight({name: "Stamat", age: 16});
        expect(list.toString()).to.be.equal("5, 0, -96, hello,js, 5.32, [object Object]");
    });
    it('should test mixed', function () {
        list.addRight(5);
        list.addLeft("Gosho");
        list.addRight(["hello", "js"]);
        list.addRight(5.32);
        list.addLeft(0);
        expect(list.toString()).to.be.equal("0, Gosho, 5, hello,js, 5.32");
    });
    it('should clear the list', function () {
        list.addRight(5);
        list.addLeft("Gosho");
        list.addRight(["hello", "js"]);
        list.addRight(5.32);
        list.addLeft(0);
        list.clear();
        expect(list.toString()).to.be.equal("");
    });
});