import { Random } from 'mockjs'
import { IUser } from '@/type'

export const TestUserList: IUser[] = []

for (let i = 1; i <= 30; i++) {
  TestUserList.push({
    id: i,
    username: Random.cname(),
    password: '123456',
    email: Random.email(),
    phone: '12312312311',
    role: Math.floor(Math.random() * 3 + 1),
    createtime: new Date().getTime(),
    updatetime: new Date().getTime()
  })
}
