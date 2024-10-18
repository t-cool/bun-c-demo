import { dlopen, FFIType, suffix } from "bun:ffi";

// 共有ライブラリのパスを動的に生成
const path = `./libcalculator.${suffix}`;

console.log("Loading library from:", path);

// ライブラリを読み込み、関数をインポート
const lib = dlopen(path, {
  add: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
  subtract: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
  multiply: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
  divide: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.f32,
  },
});

// インポートした関数を使用
console.log("加算: 5 + 3 =", lib.symbols.add(5, 3));
console.log("減算: 10 - 4 =", lib.symbols.subtract(10, 4));
console.log("乗算: 6 * 7 =", lib.symbols.multiply(6, 7));
console.log("除算: 15 / 2 =", lib.symbols.divide(15, 2));
console.log("ゼロ除算: 10 / 0 =", lib.symbols.divide(10, 0));
