const { lookupChar } = require("./char.js");
const { expect } = require("chai");

describe('lookupChar function tests', () => {
    it('returns undefined', () => {
        expect(lookupChar(5,'1')).to.be.undefined
        expect(lookupChar([],1)).to.be.undefined
        expect(lookupChar('hi',[])).to.be.undefined
        expect(lookupChar('hi',1.1)).to.be.undefined
    });
    it('returns Incorrect index', () => {
        expect(lookupChar('hi',2)).to.equal('Incorrect index')
        expect(lookupChar('hi',-1)).to.equal('Incorrect index')
        expect(lookupChar('hi',2,2)).to.equal('Incorrect index')
    });

    it('happy path', () => {
        expect(lookupChar('hi',1)).to.equal('i')
        expect(lookupChar('hello',4)).to.equal('o')
    });
});