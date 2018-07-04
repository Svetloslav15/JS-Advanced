const expect = require("chai").expect;
const PaymentPackage = require("../02. Payment Package").PaymentPackage;

describe("Payment Package Unit Tests", function () {
    describe("Constructor Tests", function () {
        it('should be true', function () {
            let p = new PaymentPackage("Stamat", 20);
            expect(p instanceof PaymentPackage).to.be.true;
        });
        it('should be true', function () {
            let p = new PaymentPackage("Stamat", 20);
            expect(p.hasOwnProperty("_name")).to.be.true;
            expect(p.hasOwnProperty("_value")).to.be.true;
            expect(p.hasOwnProperty("_VAT")).to.be.true;
            expect(p.hasOwnProperty("_active")).to.be.true;
        });
        it('should have correct values for Stamat and 60.5', function () {
            let p = new PaymentPackage("Stamat", 60.5);

            expect(p.name).to.be.equal("Stamat");
            expect(p.value).to.be.equal(60.5);
            expect(p.active).to.be.true;
            expect(p._active).to.be.true;
            expect(p.VAT).to.be.greaterThan(1);
            expect(p._VAT).to.be.greaterThan(1);
        });
        it('should throw exception', function () {
            let p = null;
            expect(() => p = new PaymentPackage(123, 123)).to.throw(Error);
            expect(() => p = new PaymentPackage("", 123)).to.throw(Error);
            expect(() => p = new PaymentPackage("Svetli", -1)).to.throw(Error);
            expect(() => p = new PaymentPackage(123)).to.throw(Error);
            expect(() => p = new PaymentPackage("Svetli")).to.throw(Error);
        });
    });
    describe("ToString", function () {
        it('should return correct value for "Svetli" and 500', function () {
            let p = new PaymentPackage("Svetli", 500);
            let expectedText = [
                `Package: ${p.name}` + '',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
            ].join("\n");
            let actualText = p.toString();
            expect(actualText).to.be.equal(expectedText);
        });
        it('should return correct value for "Svetli" and 50.3', function () {
            let p = new PaymentPackage("Svetli", 50.3);
            let expectedText = [
                `Package: ${p.name}` + '',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
            ].join("\n");
            let actualText = p.toString();
            expect(actualText).to.be.equal(expectedText);
        });
        it('should return correct value', function () {
            let p = new PaymentPackage("0", 0);
            let expectedText = [
                `Package: ${p.name}` + '',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
            ].join("\n");
            let actualText = p.toString();
            expect(actualText).to.be.equal(expectedText);
        });
    });
    describe("Name Tests", function () {
        it('should return correct value for gosho', function () {
            let p = new PaymentPackage("Gosho", 10);
            expect(p.name).to.be.equal("Gosho");
            expect(p._name).to.be.equal("Gosho");
        });
        it('should change name to Stamat', function () {
            let p = new PaymentPackage("Gosho", 200);
            p.name = "Stamat";
            expect(p.name).to.be.equal("Stamat");
            expect(p._name).to.be.equal("Stamat");
        });
    });
    describe("Active Tests", function () {
        let p;
        beforeEach(function () {
            p = new PaymentPackage("abc", 100);
        });
        it('should be changed to false', function () {
            p.active = false;
            expect(p.active).to.be.false;
            expect(p._active).to.be.false;
        });
    });
    describe("VAT tests", function () {
        let p;
        beforeEach(function () {
            p = new PaymentPackage("abc", 100);
        });
        it('should throw Error', function () {
            expect(() => p.VAT = -1).to.throw(Error);
        });
    });
});