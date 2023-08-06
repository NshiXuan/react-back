import React, { createContext, useContext } from 'react'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import useMenu from '@/hooks/useMenu'
import { menuData } from '@/data/menu-data'

interface ICollapseContext {
  collapse: boolean
  setCollapse: any
}

export const CollapseContext = createContext<ICollapseContext>({
  collapse: false,
  setCollapse: undefined
})

const BreadCrumb = function () {
  const { collapse, setCollapse } = useContext(CollapseContext)
  const { menuBread } = useMenu(menuData)

  return (
    <div className=" flex items-center   shadow-sm h-[40px] m-3 ">
      {collapse ? (
        <MenuUnfoldOutlined
          className="py-[10px] pl-[15px] cursor-pointer"
          onClick={() => {
            setCollapse(false)
          }}
        />
      ) : (
        <MenuFoldOutlined
          className="py-[10px] pl-[15px] cursor-pointer"
          onClick={() => {
            setCollapse(true)
          }}
        />
      )}
      <span className="ml-3">{menuBread}</span>
    </div>
  )
}

export default BreadCrumb

// 设置一个方便调试的name 可以不写 默认为组件名称
BreadCrumb.displayName = 'BreadCrumb'
