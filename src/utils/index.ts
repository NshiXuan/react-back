import { IRole } from '@/type'
import dayjs from 'dayjs'

export const formatTimeV1 = (time: number) => {
  return dayjs(time).format('YYYY/MM/DD HH:mm:ss')
}

export const formatTimeV2 = (time: number) => {
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}

export const mapRole = (roles?: IRole[], roleId?: string) => {
  const role = roles?.filter((item) => item.id === roleId)
  return role?.[0]?.name
}
