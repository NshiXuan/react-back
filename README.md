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
- 表格：定义好 `columns` 表格的每一列，从 `useTable` 中获取 `Table` 组件需要的方法，即可渲染出表格

## 问题

- login 页面刷新时 loading 位置不正确
