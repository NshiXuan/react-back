import { MenuDataItem } from '@/data/menu-data'
import { useLocation } from 'react-router-dom'

// selectedKey为默认选中的菜单
// defaultOpenKeys为默认打开的菜单
export default function useMenu(menu: MenuDataItem[]) {
  const { pathname } = useLocation()

  let defaultOpenKeys = ''
  // 当前一级菜单
  let currentMenu: MenuDataItem | undefined = undefined
  // 面包屑
  let menuBread = ''

  for (const item of menu) {
    if (pathname.includes(item.link)) {
      defaultOpenKeys = item.link
      currentMenu = item
      menuBread = item.label as string
    }

    if (item.children) {
      item.children.forEach((iten) => {
        iten.link == pathname &&
          (menuBread = (menuBread + ' / ' + iten.label) as string)
      })
    }
  }

  return { selectedKey: pathname, defaultOpenKeys, currentMenu, menuBread }
}
