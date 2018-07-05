const expect = require("chai").expect;
const StringBuilder = require("../string-builder");

describe("StringBuilder tests", function () {
   describe("Constructor tests", function () {
       it('should not throw error', function () {
           let sb;
           let expected = () => sb = new StringBuilder("text");
           expect(expected).to.not.throw(Error);
       });
       it('should not throw error', function () {
           let sb;
           let expected = () => sb = new StringBuilder();
           expect(expected).to.not.throw(Error);
       });
       it('should throw error', function () {
           let sb;
           let expected = () => sb = new StringBuilder(6);
           expect(expected).to.throw(Error);
       });
   });
});