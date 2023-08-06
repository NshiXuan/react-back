import {
  DashboardOutlined,
  FormOutlined,
  ReadOutlined,
  UserOutlined
} from '@ant-design/icons'
import React from 'react'

export type MenuDataItem = {
  label: React.ReactNode
  key: string
  link: string
  icon?: React.ReactNode
  children?: MenuDataItem[]
}

// key与link保持一致
export const menuData: MenuDataItem[] = [
  {
    label: '首页',
    key: '/home',
    link: '/home',
    icon: <ReadOutlined />
  },
  {
    label: '账户管理',
    key: '/user',
    link: '/user',
    icon: <DashboardOutlined />,
    children: [
      {
        label: '账户列表',
        key: '/user/list',
        link: '/user/list',
        icon: <FormOutlined />
      },
      {
        label: '角色管理',
        key: '/user/role',
        link: '/user/role',
        icon: <UserOutlined />
      }
    ]
  }
]
