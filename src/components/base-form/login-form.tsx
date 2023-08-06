import { IFormItem } from '.'

export const loginForm: IFormItem[] = [
  {
    type: 'input',
    label: '用户名',
    name: 'username',
    size: 'large'
    // rules: [{ required: true, message: '请输入用户名' }]
  },
  {
    type: 'password',
    label: '密码',
    name: 'password',
    size: 'large'
    // rules: [{ required: true, message: '请输入密码' }]
  }
]
