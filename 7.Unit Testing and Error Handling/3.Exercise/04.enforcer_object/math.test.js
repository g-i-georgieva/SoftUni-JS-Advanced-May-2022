const { mathEnforcer } = require("./math.js");
const { expect } = require("chai");

describe("mathEnforcer object tests", () => {
  describe("addFive function tests", () => {
    it("happy path", () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
      expect(mathEnforcer.addFive(-5)).to.equal(0);
      expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
    });
    it("return undefined", () => {
      expect(mathEnforcer.addFive("1")).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
    });
  });

  describe("subtractTen function tests", () => {
    it("happy path", () => {
      expect(mathEnforcer.subtractTen(5)).to.equal(-5);
      expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
      expect(mathEnforcer.subtractTen(5.5)).to.equal(-4.5);
    });
    it("return undefined", () => {
      expect(mathEnforcer.subtractTen("1")).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });
  });
  describe("sum function tests", () => {
    it("happy path", () => {
      expect(mathEnforcer.sum(5, 5)).to.equal(10);
      expect(mathEnforcer.sum(-5, 5)).to.equal(0);
      expect(mathEnforcer.sum(5, -5)).to.equal(0);
      expect(mathEnforcer.sum(5.5, 3.1)).to.equal(8.6);
    });
    it("return undefined", () => {
      expect(mathEnforcer.sum("1", 1)).to.be.undefined;
      expect(mathEnforcer.sum(1, "1")).to.be.undefined;
      expect(mathEnforcer.sum([], 1)).to.be.undefined;
      expect(mathEnforcer.sum(1, [])).to.be.undefined;
      expect(mathEnforcer.sum({}, 1)).to.be.undefined;
      expect(mathEnforcer.sum(1, {})).to.be.undefined;
    });
  });
});
