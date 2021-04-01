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
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'eol-last': 0,
    'generator-star-spacing': 0,//生成器函数*的前后空格
    'handle-callback-err': 0,//nodejs 处理错误
    'indent':1,//缩进风格
    'no-debugger': 2,//process.env.NODE_ENV === 'production' ? 'error' : 'off',//禁止使用debugger
    'no-return-assign': 0,//return 语句中不能有赋值表达式
    'semi': 0,//语句强制分号结尾
    'vue/no-mutating-props': 0
  //   "curly": ["error", "all"],
  //     "comma-dangle": ["error", "only-multiline"],
  //     "camelcase": ["error", {"properties": "never"}],
  //     "flowtype/define-flow-type": 1,
  //     "flowtype/use-flow-type": 1,
  //     "indent": ["error", 4, {"SwitchCase": 1}],
  //     "object-curly-spacing": ["error", "never"],
  //     "space-before-function-paren": ["error", "never"],
  //     "space-before-blocks": ["error", "always"],
  //     "space-infix-ops": ["error", {"int32Hint": false}],
  //     "no-alert": "error",
  //     "no-dupe-args": "error",
  //     "no-duplicate-case": "error",
  //     "no-duplicate-imports": "error",
  //     "no-empty": "error"
  }
}
