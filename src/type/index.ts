export interface IUser {
  id: string | number
  username: string
  password: string
  email?: string
  phone?: string
  role: string | number
  createtime: number
  updatetime: number
}

export interface IRole {
  id: string | number
  name: string
  description: string
}

export interface ILoginUser {
  username: string
  password: string
}
