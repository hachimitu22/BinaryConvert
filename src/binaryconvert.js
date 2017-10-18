var fs = require('fs');

/**
 * バイナリ変換クラス
 * @param {Buffer} binaryData 変換するバイナリデータ
 */
var ConvertBinary = function (binaryData) {
  this._data = binaryData;
  this.length = this._data.length;

  /**
   * チェックサムを計算
   * @returns {number} チェックサム
   */
  this.calcCheckSum = function () {
    var size = this._data.length;
    var sum = 0;

    for (var i = 0; i < size; i++) {
      sum += this._data[i];
    }

    return sum;
  };

  /**
   * バイナリサイズを変更
   * @param {number} size 変更後のサイズ。バイト単位
   * @param {number} fillValue サイズ変更後の方が大きい場合に埋めるのに使う値
   */
  this.resize = function (size, fillValue) {
    var fillSize;
    var fillData;

    if (size > this._data.length) {
      fillSize = size - this._data.length + 1;
      fillData = Buffer.alloc(fillSize, fillValue);
      this._data = Buffer.concat([this._data, fillData], size);
    } else if (size < this._data.length) {
      this._data = this._data.slice(0, size);
    } else {
      // nop.
    }

    this.length = this._data.length;
  };

  /**
   * バイナリのスワップ
   */
  this.swap = function () {
    if (this._data.length % 2 == 0) {
      this._data.swap16();
    } else {
      console.log('長さ:' + this._data.length + 'で奇数なのでスワップ出来ません。');
    }
    // switch (swapSize) {
    //   case 2: this._data.swap16(); break;
    //   case 4: this._data.swap32(); break;
    //   case 8: this._data.swap64(); break;
    //   default:
    //     condole.log(swapSize + 'バイト毎のスワップ未対応です。');
    //     break;
    // }
  };

  /**
   * バイナリ出力
   * @param {string} filePath 出力ファイルのパス。相対、絶対どちらも可。
   */
  this.output = function (filePath) {
    fs.writeFileSync(filePath, this._data);
  };
};

module.exports = ConvertBinary;
