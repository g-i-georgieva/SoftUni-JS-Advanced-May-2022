const { rgbToHexColor } = require("./rgb.js");
const { expect } = require("chai");

describe("rgbToHexColor function tests", () => {
  it("converts black", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("converts white", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });
  it("converts blue", () => {
    expect(rgbToHexColor(35, 68, 101)).to.equal("#234465");
  });

  it("converts 15, 15, 15 to #0F0F0F", () => {
    expect(rgbToHexColor(15, 15, 15)).to.equal("#0F0F0F");
  });
  it("returns undefined for missing params", () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
    expect(rgbToHexColor(0)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });
  it("returns undefined for for out of lower bound", () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });
  it("returns undefined for for out of upper bound", () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
  });

  it("returns undefined for for floating numbers", () => {
    expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
  });
  it("returns undefined for for string", () => {
    expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, '1', 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, '1')).to.be.undefined;
  });
});
