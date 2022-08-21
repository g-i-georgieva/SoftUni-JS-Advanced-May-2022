const { isOddOrEven } = require("./odd.js");
const { expect } = require("chai");

describe('isOddOrEven function tests', () => {
    it('happy path', () => {
        expect(isOddOrEven('hi')).to.equal('even')
        expect(isOddOrEven('hello')).to.equal('odd')
    });

    it('retuns undefined', () => {
        expect(isOddOrEven(5)).to.be.undefined
        expect(isOddOrEven([])).to.be.undefined
        expect(isOddOrEven({})).to.be.undefined
        expect(isOddOrEven(5.5)).to.be.undefined
        expect(isOddOrEven(null)).to.be.undefined
        expect(isOddOrEven(undefined)).to.be.undefined
    });
});