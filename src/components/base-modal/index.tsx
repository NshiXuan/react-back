import { FormInstance, Modal } from "antd"
import React from "react"
import { memo, ReactNode } from "react"
import type { FC } from "react"

export interface IProps {
  open: boolean
  handleCancel: () => void
  handleOk: () => void // 提交的回调函数
  title?: string
  cancelText?: string // 取消按钮文本
  okText?: string // 确认按钮文本
  closeIcon?: boolean // 是否取消右上角的 x 
  width?: number // 模态框宽度
  children?: ReactNode
}

// memo浅层比较
const BaseModal: FC<IProps> = memo(function (props) {
  const { open, title = '默认标题', closeIcon = true, handleCancel, cancelText = '取消', okText = '确认', width, handleOk, children } = props

  return (
    <Modal
      forceRender
      open={open}
      title={title}
      okText={okText}
      cancelText={cancelText}
      closeIcon={closeIcon}
      width={width}
      onCancel={() => {
        handleCancel && handleCancel()
      }}
      onOk={() => {
        handleOk && handleOk()
      }}
    >
      {children}
    </Modal>
  )
})

export default BaseModal

// 设置一个方便调试的name 可以不写 默认为组件名称
BaseModal.displayName = "BaseModal"
