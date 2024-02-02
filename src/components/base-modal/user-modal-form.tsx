import { IFormItem } from '../base-form'

export default function UserModalForm(options: any[]) {
  return [
    {
      type: 'input',
      name: 'username',
      label: '用户名',
      placeholder: '请输入用户名',
      allowClear: true,
      rules: [
        { required: true, message: '用户名不为空' },
        {
          pattern: /^[a-zA-Z0-9]{4,20}$/,
          message: '用户名只能包含英文或数字，长度为4-20个字符'
        }
      ]
    },
    {
      type: 'input',
      name: 'password',
      label: '密码',
      placeholder: '请输入密码',
      allowClear: true,
      rules: [
        { required: true, message: '密码不为空' },
        {
          min: 6,
          max: 20,
          message: '密码长度为6到20个字符'
        },
        {
          pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
          message: '密码必须包含数字、英文小写字母和英文大写字母'
        }
      ]
    },
    {
      type: 'input',
      name: 'confirmPassword',
      label: '确认密码',
      placeholder: '请再次输入密码',
      allowClear: true,
      rules: [
        {
          required: true,
          message: '请再次输入密码'
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('两次输入的密码不一致'))
          }
        })
      ]
    },
    {
      type: 'input',
      name: 'email',
      label: '邮箱',
      placeholder: '请输入邮箱',
      allowClear: true,
      rules: [{ type: 'email', message: '请输入正确的邮箱格式' }]
    },
    {
      type: 'input',
      name: 'phone',
      label: '手机号',
      placeholder: '请输入11位手机号',
      allowClear: true,
      rules: [
        {
          pattern: /^1[3-9]\d{9}$/,
          message: '请输入正确的手机号,首位必须是1，第二位必须大于2'
        }
      ]
    },
    {
      type: 'select',
      name: 'role',
      label: '角色',
      placeholder: '请选择角色',
      options,
      rules: [{ required: true, message: '角色不为空' }]
    }
  ] as IFormItem[]
}
