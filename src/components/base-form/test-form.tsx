import { IFormItem } from '.'

export const TestForm: IFormItem[] = [
  {
    type: 'input',
    label: '姓名',
    name: 'name',
    allowClear: true,
    rules: [{ required: true, message: '姓名是必须的' }]
  },
  {
    type: 'input',
    label: '学号',
    name: 'studentId',
    allowClear: true
  },
  {
    type: 'radio',
    label: '性别',
    name: 'sex',
    options: [
      {
        label: '男',
        value: '1'
      },
      {
        label: '女',
        value: '0'
      }
    ]
  },
  {
    type: 'textarea',
    label: '简介',
    name: 'desc',
    allowClear: true
  }
]
