var assert = require('assert');
var BinaryConvert = require('../src/binaryconvert.js');


describe('resize', function () {
  it('0x00埋めで大きくする', function () {
    var expectedData = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x00, 0x00]);
    var binaryData = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    var cb = new BinaryConvert(binaryData);

    cb.resize(6, 0x00);

    assert.equal(cb.length, expectedData.length);
    assert.equal(cb._data.compare(expectedData), 0);
  });

  it('0xFF埋めで大きくする', function () {
    var expectedData = Buffer.from([0x00, 0x01, 0x02, 0x03, 0xFF, 0xFF]);
    var binaryData = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    var cb = new BinaryConvert(binaryData);

    cb.resize(6, 0xFF);

    assert.equal(cb.length, expectedData.length);
    assert.equal(cb._data.compare(expectedData), 0);
  });

  it('小さくする', function () {
    var expectedData = Buffer.from([0x00, 0x01]);
    var binaryData = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    var cb = new BinaryConvert(binaryData);

    cb.resize(2, 0x00);

    assert.equal(cb.length, expectedData.length);
    assert.equal(cb._data.compare(expectedData), 0);
  });

  it('変更しない', function () {
    var expectedData = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    var binaryData = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    var cb = new BinaryConvert(binaryData);

    cb.resize(4, 0x00);

    assert.equal(cb.length, expectedData.length);
    assert.equal(cb._data.compare(expectedData), 0);
  });
});
