import { cc } from "bun:ffi";

const {
  symbols: { add, subtract, multiply, divide },
} = cc({
  source: "./calculator.c",
  symbols: {
    add: {
      returns: "int",
      args: ["int", "int"],
    },
    subtract: {
      returns: "int",
      args: ["int", "int"],
    },
    multiply: {
      returns: "int",
      args: ["int", "int"],
    },
    divide: {
      returns: "float",
      args: ["int", "int"],
    },
  },
});

console.log("加算: 5 + 3 =", add(5, 3));
console.log("減算: 10 - 4 =", subtract(10, 4));
console.log("乗算: 6 * 7 =", multiply(6, 7));
console.log("除算: 15 / 2 =", divide(15, 2));
console.log("ゼロ除算: 10 / 0 =", divide(10, 0));
