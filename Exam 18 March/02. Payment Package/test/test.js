const expect = require("chai").expect;
const PaymentPackage = require("../02. Payment Package");

describe("Payment Package Unit Tests", function () {
    describe("Constructor tests", function () {
        let p;
        beforeEach(function () {
            p = new PaymentPackage("23", 25);
        });
        it('should be true', function () {
            expect(p).to.be.instanceOf(PaymentPackage);
        });
        it('should have properties', function () {
            expect(p.hasOwnProperty("_name")).to.be.true;
            expect(p.hasOwnProperty("_value")).to.be.true;
            expect(p.hasOwnProperty("_VAT")).to.be.true;
            expect(p.hasOwnProperty("_active")).to.be.true;
        });
    });
    describe("toString tests", function () {
        it('should append (inactive)', function () {
            let p = new PaymentPackage("Stamat", 25);
            p.active = false;
            let expectedResult = [` Package: ${this.name} (inactive)`,
                `- Value (excl. VAT): ${this.value}`,
                `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
            ];
            return expectedResult.join('\n');
            expect(p.toString()).to.be.equal(expectedResult);
        });
        it('should append ""', function () {
            let p = new PaymentPackage("Stamat", 500);
            let expectedResult = [
                `Package: ${p.name}` + '',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
            ].join("\n");
            expect(p.toString()).to.be.equal(expectedResult);
        });
        it('should append ""', function () {
            let p = new PaymentPackage("Stamat", 50.3);
            let expectedResult = [
                `Package: ${p.name}` + '',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
            ].join("\n");
            expect(p.toString()).to.be.equal(expectedResult);
        });
        it('should return correct value', function () {
            let p = new PaymentPackage("0", 0);
            let expectedResult = [
                `Package: ${p.name}` + '',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
            ].join("\n");
            let actualText = p.toString();
            expect(actualText).to.be.equal(expectedResult);
        });
    });
    describe("Tests Getter and Setters", function () {
        it('should be valid', function () {
            let p = new PaymentPackage("Svetli", 16);
            p.name = "Stamat";
            p.value = 15;
            p.VAT = 166;
            p.active = false;
            expect(p.name).to.be.equal("Stamat");
            expect(p.value).to.be.equal(15);
            expect(p.VAT).to.be.equal(166);
            expect(p.active).to.be.false;
        });
    });
});