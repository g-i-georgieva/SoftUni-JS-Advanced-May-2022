const { isSymmetric } = require("./symetry.js");
const { expect } = require("chai");
//mocha 5.symetry\symetry.test.js - start testing

describe("funstion isSymmetric tests", () => {
  it("works with symetric numeric array", () => {
    expect(()=>isSymmetric([1, 2, 2, 1])).to.not.throw(`This is`);
  });

  it("return false for non-symetric numeric array", () => {
    expect(isSymmetric([1, 2, 2])).to.be.false;
  });

  it("return false for non-array", () => {
    expect(isSymmetric(5)).to.be.not.be.true;
  });

  it("works with symetric odd length array", () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });

  it("return false for symetric string array", () => {
    expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
  });

  it("return false for string param", () => {
    expect(isSymmetric('sdfsg')).to.be.false;
  });

  it("return false for type mismatched elements", () => {
    expect(isSymmetric([1, 2, '1'])).to.be.false;
  });
});


