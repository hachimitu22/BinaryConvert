var assert = require('assert');
var BinaryConvert = require('../src/binaryconvert.js');


describe('calcCheckSum', function () {
  it('加工せずにそのまま計算', function () {
    var binaryData = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    var cb = new BinaryConvert(binaryData);

    assert.equal(cb.calcCheckSum(), 0x0006);
  });

  it('リサイズ後に計算', function () {
    var binaryData = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    var cb = new BinaryConvert(binaryData);

    cb.resize(6, 0xFF);

    assert.equal(cb.calcCheckSum(), 0x0204);
  });

  it('スワップ後に計算', function () {
    var binaryData = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    var cb = new BinaryConvert(binaryData);

    cb.swap();

    assert.equal(cb.calcCheckSum(), 0x0006);
  });

  it('リサイズ、スワップ後に計算', function () {
    var binaryData = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    var cb = new BinaryConvert(binaryData);

    cb.resize(6, 0xFF);
    cb.swap();

    assert.equal(cb.calcCheckSum(), 0x0204);
  });
});
