describe('function sum tests', () => {
    it('happy path', () => {
        expect(sum([1,2,3,4])).to.be.equal(10)
    });

    it('happy path', () => {
        expect(sum([1,2,'3','4'])).to.be.equal(10)
    });

    it('false output', () => {
        expect(sum(['a',2,'3','4'])).to.deep.equal(NaN)
        expect(sum('shdgajsh')).to.deep.equal(NaN)
        
    });
});