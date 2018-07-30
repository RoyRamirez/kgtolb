const expect = require('chai').expect;
const convert = require('..').default;
describe('#kgtolb', function () {
  it('Kg to lb', function (){
    const weight = convert(10, "kg->lb");
    expect(weight).to.equal("22.0462 Pounds");
  });
  it('lb to Kg', function (){
    const weight = convert(5, "lb->kg");
    expect(weight).to.equal("2.26796 Kilograms");
  });
  it('error test', function () {
    const weight = convert(10, "kglb");
    expect(weight).to.equal("Invalid conversion");
  })
});
