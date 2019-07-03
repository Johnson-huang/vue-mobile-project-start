// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  plugins: [ "html", "vue"],
  settings: {
    "html/html-extensions": [".html", ".vue"]
  },
  // add your custom rules here
  rules: {
    'vue/jsx-uses-vars': 2,
    "no-extra-semi": "error",
    "semi": [2, 'always'],
    'space-before-function-paren': [0, 'always'],
  }
}
