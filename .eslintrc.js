// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    jquery: true
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
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 在函数声明的括号前添加一个空格,禁用(允许不加空格)function sum() {}可以使用
    'space-before-function-paren': 0,
    // 没有多个空行,禁用(允许空行)
    'no-multiple-empty-lines': 0,
    // 箭头函数参数需要括号
    'arrow-parens': 0,
    // 配置分号检查，没有分号报错
    'semi': ['error', 'always'],
    // 配置不检查双引号和单引号
    'quotes': 0,
    // 不应使用制表符，禁用(允许使用制表符)
    'no-tabs': 0,
    // 缩进为零,默认使用webstorm的格式
    'indent': 0,
    // 允许空行上的尾随空白
    'no-trailing-spaces': ['error', {'skipBlankLines': true}],
    // 禁止在计算属性中对属性修改(off表示关掉此规则)
    'vue/no-side-effects-in-computed-properties': 'off',
    // 禁止使用无用返回规则
    'no-useless-return': 'off',
    'eol-last': 0
  }
}
