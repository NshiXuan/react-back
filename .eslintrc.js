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
    '@typescript-eslint/no-var-requires': 'off', // 可以使用require导入
    '@typescript-eslint/no-explicit-any': 'off', // 可以使用any类型
    '@typescript-eslint/no-unused-vars': 'off', // 定义了却们没有使用的检查
    'react/prop-types': 'off', // 关闭react的porpType检查
    '@typescript-eslint/no-empty-interface': 'off' // 关闭interface不为空对象
  }
}
