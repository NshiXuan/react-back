import { useLocation, useNavigate } from 'react-router-dom'
import { BACK_USER } from '@/enums'
import { ILoginUser } from '@/type'
import { useEffect, useState } from 'react'
import { useSyncLocalStorage } from './useSyncLocalStorage'

export default function useAuth() {
  const { pathname } = useLocation()
  const nav = useNavigate()
  const [user, setUser] = useSyncLocalStorage<ILoginUser>(BACK_USER)
  const [isBack, setIsBack] = useState(false)

  useEffect(() => {
    // 用户不存在
    if (!user || (user.username != 'admin' && user.password != '123456')) {
      setIsBack(false)
      return nav('/login')
    }

    // 用户存在
    pathname == '/login' || pathname == '/register'
      ? nav('/home')
      : setIsBack(true)
  }, [pathname])

  return { isBack }
}
