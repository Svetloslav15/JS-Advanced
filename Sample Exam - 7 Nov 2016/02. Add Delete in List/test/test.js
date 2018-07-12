const expect = require("chai").expect;
const list = require("../list");

describe('list', function () {
    it('should add correctly items', function () {
        let lis = list;
        lis.add(5);
        lis.add("text");
        lis.add(false);
        lis.delete(0);
        expect(lis.toString()).to.be.equal("5, false");
    });
});