import { Form } from 'antd'
import { useState } from 'react'

export default function useBaseModalForm() {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return {
    isModalOpen,
    showModal,
    handleCancel,
    form
  }
}
