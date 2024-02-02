## 安装依赖
```
pnpm i
```

## 运行
```
pnpm start
```

## 使用手册
- 菜单：根据 `data` 目录的 `menu-data.tsx` 配置菜单项，然后创建对应的 `router` 与 `page` 即可创建出对应的菜单

- 表格：
  - 引入 antd 的 Table
  - 定义好 `columns` 表格的每一列，从 `useTable` 中获取 `Table` 组件需要的方法，即可渲染出表格

- 表单
  - 引入封装好的 BaseForm
  - 调用 useBaseForm 配置 BaseForm
  - 参考 base-form 目录中的数据定义表单

- 模态框
  - 引入封装好的 BaseModal
  - 调用 useBaseModal Hook 方法配置 BaseModal，目前只支持普通的表单类型
  - 在对应的打卡按钮配置 OnClick 打开 BaseModal
  - Modal 宽度会根据子盒子撑开
  - 可结合 BaseFrom 一起使用
  - NOTE: 如果要定义复杂的模态框，比如人脸识别，需要自定义

## NOTE
- useBaseForm、useBaseModal 这些 Hook 是封装示例，在不同页面中使用，比如 user、role 中，由于 handlexxx 等函数的业务逻辑不一样，需要自己封装

## 问题

- login 页面刷新时 loading 位置不正确
