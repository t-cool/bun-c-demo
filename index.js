import { cc } from "bun:ffi";

const {
  symbols: { hello },
} = cc({
  source: "./hello.c",
  symbols: {
    hello: {
      returns: "void",
      args: [],
    },
  },
});

hello();
