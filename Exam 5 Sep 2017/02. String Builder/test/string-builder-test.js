const expect = require("chai").expect;
const StringBuilder = require("../string-builder");

describe("StringBuilder tests", function () {
    describe("Constructor tests", function () {
        it('should not throw error', function () {
            let sb;
            let expected = () => sb = new StringBuilder("text");
            expect(expected).to.not.throw(Error);
        });
        it('should throw error', function () {
            let sb;
            expect(() => sb = new StringBuilder(6)).to.throw(Error);
            expect(() => sb = new StringBuilder([])).to.throw(Error);
            expect(() => sb = new StringBuilder({})).to.throw(Error);
        });
        it('has functions attached to prototype', function () {
            let sb = new StringBuilder();
            expect(sb.hasOwnProperty('append')).to.equal(true, "Missing append function");

        });
    });
    describe('Apppend method', function () {
        it('should return StamatStamatov', function () {
            let sb = new StringBuilder("Stamat");
            sb.append("Stamatov");
            expect(sb.toString()).to.be.equal("StamatStamatov");
        });
        it('should return Stamat56', function () {
            let sb = new StringBuilder("Stamat");
            sb.append("56");
            expect(sb.toString()).to.be.equal("Stamat56");
        });
        it('should return Stamat', function () {
            let sb = new StringBuilder("Stamat");
            sb.append("");
            expect(sb.toString()).to.be.equal("Stamat");
        });
    });
    describe("Prepend method tests", function () {
        it('should return Stamat', function () {
            let sb = new StringBuilder("Stamat");
            sb.prepend("");
            expect(sb.toString()).to.be.equal("Stamat");
        });
        it('should return Hello Stamat', function () {
            let sb = new StringBuilder("Stamat");
            sb.prepend("Hello ");
            expect(sb.toString()).to.be.equal("Hello Stamat");
        });
    });
    describe("InsertAt method tests", function () {
        it('should return JavaScriptJava', function () {
            let sb = new StringBuilder("JavaJava");
            sb.insertAt("Script", 4);
            expect(sb.toString()).to.be.equal("JavaScriptJava");
        });
        it('should return JavaJavaScript', function () {
            let sb = new StringBuilder("JavaJava");
            sb.insertAt("Script", 14);
            expect(sb.toString()).to.be.equal("JavaJavaScript");
        });
        it('should return ScriptJavaJava', function () {
            let sb = new StringBuilder("JavaJava");
            sb.insertAt("Script", -114);
            expect(sb.toString()).to.be.equal("ScriptJavaJava");
        });
        it('should return JavaJavScripta', function () {
            let sb = new StringBuilder("JavaJava");
            sb.insertAt("Script", -1);
            expect(sb.toString()).to.be.equal("JavaJavScripta");
        });
        it('should return ScriptJavaJava', function () {
            let sb = new StringBuilder("JavaJava");
            sb.insertAt("Script");
            expect(sb.toString()).to.be.equal("ScriptJavaJava");
        });
        it('should Throw Error', function () {
            let sb = new StringBuilder("JavaJava");
            expect(() => sb.insertAt(1)).to.throw(TypeError);
        });
    });
    describe("Remove method tests", function () {
        it('should return Java', function () {
            let sb = new StringBuilder("JavaJava");
            sb.remove(0, 4);
            expect(sb.toString()).to.be.equal("Java");
        });
        it('should return ""', function () {
            let sb = new StringBuilder("JavaJava");
            sb.remove(0, 10);
            expect(sb.toString()).to.be.equal("");
        });
        it('should return Java', function () {
            let sb = new StringBuilder("JavaJava");
            sb.remove(10, 4);
            expect(sb.toString()).to.be.equal("JavaJava");
        });
        it('should return JavaJava', function () {
            let sb = new StringBuilder("JavaJava");
            sb.remove(2);
            expect(sb.toString()).to.be.equal("JavaJava");
        });
    });
});