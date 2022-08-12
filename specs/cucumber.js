module.exports = {
    default: [
      "*.feature",
      "--require-module ts-node/register",
      "--require ./steps/*.ts",
      "--publish-quiet"
    ].join(" "),
  }