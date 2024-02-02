import { IFormItem } from '../base-form'

// 定义角色名称的验证规则
const roleValidator = (
  rule: any,
  value: string,
  callback: (value?: string) => void
) => {
  const reg = /^[\u4e00-\u9fa5\w]{2,6}$/
  if (value && !reg.test(value)) {
    callback('请输入2-6个字符、中文或英文')
  } else {
    callback()
  }
}

// 定义角色描述的验证规则
const descValidator = (
  rule: any,
  value: string,
  callback: (value?: string) => void
) => {
  const reg = /^[\u4e00-\u9fa5\w,.;]{4,40}$/
  if (value && !reg.test(value)) {
    callback('请输入4-40个字符，中文或英文或数字，可包括英文逗号句号分号')
  } else {
    callback()
  }
}

export const RoleModalForm = [
  {
    type: 'input',
    name: 'name',
    label: '角色名称',
    placeholder: '请输入角色名称',
    allowClear: true,
    rules: [
      { required: true, message: '角色名称不为空' },
      { validator: roleValidator }
    ]
  },
  {
    type: 'textarea',
    name: 'description',
    label: '描述',
    placeholder: '请输入描述',
    rules: [
      { required: true, message: '描述不为空' },
      { validator: descValidator }
    ]
  }
] as IFormItem[]
