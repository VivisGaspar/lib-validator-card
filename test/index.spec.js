let chai = require("chai");
let expect = chai.expect;
let validator = require("../index");

describe("validator", () => {
  it("This card is valid: 5283187141151664", () => {
    expect(validator.cardValidator(5283187141151664)).to.equal(true);
  });
  it("This card is valid: '5283187141151664'", () => {
    expect(validator.cardValidator("5283187141151664")).to.equal(true);
  });
  it("This card is not valid: 522471503516706", () => {
    expect(validator.cardValidator(522471503516706)).to.equal(false);
  });
  it("This card is not valid: '522471503516706'", () => {
    expect(validator.cardValidator("522471503516706")).to.equal(false);
  });
  it("This card is not valid: '1111111111111111'", () => {
    expect(validator.cardValidator("11111111111111")).to.equal(false);
  });
  it("This card is not valid: 1111111111111111", () => {
    expect(validator.cardValidator(11111111111111)).to.equal(false);
  });
  it("This card is not valid: 4916232693460535", () => {
    expect(validator.cardValidator(4916232693460535)).to.equal(false);
  });
  it("This card is valid: 4916232693460531", () => {
    expect(validator.cardValidator(4916232693460531)).to.equal(true);
  });
});
