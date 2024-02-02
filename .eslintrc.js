module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    '@typescript-eslint/no-var-requires': 'off', // 可以使用 require 导入
    '@typescript-eslint/no-explicit-any': 'off', // 可以使用 any 类型
    '@typescript-eslint/no-unused-vars': 'off', // 定义了却们没有使用的检查
    'react/prop-types': 'off', // 关闭 react 的 porpType 检查
    '@typescript-eslint/no-empty-interface': 'off', // 关闭 interface 不为空对象
    '@typescript-eslint/no-empty-function': 'off' // 关闭空函数
  }
}
