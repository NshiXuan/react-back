import { Form } from 'antd'

export default function useBaseForm() {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('🚀 ~ file: useBaseForm.ts:3 ~ onFinish ~ values:', values)
  }

  return { form, onFinish }
}
