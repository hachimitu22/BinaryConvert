## fatures

バイナリファイルの操作を行います。

- バイトスワップ
- サイズ変更
- チェックサムの計算

## Usage

``` javascript
var BinaryConvert = require('binaryconvert.js');

cb = new BinaryConvert(Buffer.from([0,1,2,3,4,5]));

cb.resize(10, 0xFF);            // 0xFF埋めで10バイトに拡張
cb.swap();                      // バイトスワップ
console.log(cb.calcCheckSum()); // チェックサムの計算
cb.output('data.bin');          // バイナリファイル出力
```

## LICENSE

MIT

