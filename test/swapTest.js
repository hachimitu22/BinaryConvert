var assert = require('assert');
var BinaryConvert = require('../src/binaryconvert.js');


describe('swap', function () {
  it('長さ偶数のデータをスワップ', function () {
    var expectedData = Buffer.from([0x01, 0x00, 0x03, 0x02]);
    var binaryData = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    var cb = new BinaryConvert(binaryData);

    cb.swap();

    assert.equal(cb.length, expectedData.length);
    assert.equal(cb._data.compare(expectedData), 0);
  });

  it('長さ奇数のデータをスワップ', function () {
    var expectedData = Buffer.from([0x10, 0x20, 0x30]);
    var binaryData = Buffer.from([0x10, 0x20, 0x30]);
    var cb = new BinaryConvert(binaryData);

    cb.swap();

    assert.equal(cb.length, expectedData.length);
    assert.equal(cb._data.compare(expectedData), 0);
  });

  it('長さ奇数のデータを偶数にリサイズしてスワップ', function () {
    var expectedData = Buffer.from([0x20, 0x10, 0xFF, 0x30]);
    var binaryData = Buffer.from([0x10, 0x20, 0x30]);
    var cb = new BinaryConvert(binaryData);

    cb.resize(4, 0xFF);
    cb.swap();

    assert.equal(cb.length, expectedData.length);
    assert.equal(cb._data.compare(expectedData), 0);
  });
});
