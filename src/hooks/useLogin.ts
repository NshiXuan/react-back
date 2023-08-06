import { BACK_USER } from '@/enums'
import { ILoginUser } from '@/type'
import { useNavigate } from 'react-router-dom'
import { useSyncLocalStorage } from './useSyncLocalStorage'
import { useCallback } from 'react'
import { message } from 'antd'

export default function useLogin() {
  const [user, setUser] = useSyncLocalStorage<ILoginUser>(BACK_USER)
  const nav = useNavigate()

  const login = useCallback((values: ILoginUser) => {
    if (values.username == 'admin' && values.password == '123456') {
      setUser(values)
      return nav('/home')
    }
    return message.error('用户名或密码错误')
  }, [])

  return { login }
}
