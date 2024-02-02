import { useState } from 'react'

export default function useBaseModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleCancel = () => {
    // TODO(nsx): 业务逻辑
    setIsOpen(false)
  }

  const handleOk = () => {
    // TODO(nsx): 业务逻辑
    setIsOpen(false)
  }

  return {
    isOpen,
    handleOpen,
    handleCancel,
    handleOk,
  }
}
