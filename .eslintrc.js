module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    // "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'vue/attribute-hyphenation': ['error', 'never'], // Disallow attribute names with hyphens
    'vue/html-quotes': ['error', 'double'], // Enforce double quotes for attribute values
    'quotes': 'off', // Turn off the quotes format rule
  },
};
