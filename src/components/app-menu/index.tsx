import React, { FC, memo, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { MenuDataItem, menuData } from '../../data/menu-data'
import { CollapseContext } from '../bread-crumb'
import useMenu from '@/hooks/useMenu'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

// 菜单项
// key用来选择高亮的
const items: MenuItem[] = menuData.map((item: MenuDataItem) => {
  // 如果有children存在
  if (item.children) {
    const children = item.children.map((child: MenuDataItem) => {
      return getItem(
        <NavLink to={child.link}>{child.label}</NavLink>,
        child.key,
        child.icon
      )
    })

    return getItem(item.label, item.key, item.icon, children)
  } else {
    // children不存在
    return getItem(
      <NavLink to={item.link}>{item.label}</NavLink>,
      item.key,
      item.icon
    )
  }
})

const AppMenu = function () {
  const { selectedKey, defaultOpenKeys } = useMenu(menuData)
  const { collapse } = useContext(CollapseContext)

  return (
    <div
      className="relative transition-all duration-200  "
      style={{ width: collapse ? 80 : 256 }}
    >
      <Menu
        selectedKeys={[selectedKey]}
        defaultOpenKeys={[defaultOpenKeys]}
        forceSubMenuRender
        mode="inline"
        theme="dark"
        items={items}
        style={{ height: '100%' }}
        inlineCollapsed={collapse}
      />
    </div>
  )
}

export default AppMenu

// 设置一个方便调试的name 可以不写 默认为组件名称
AppMenu.displayName = 'AppMenu'
