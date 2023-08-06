import React from 'react'
import { memo } from 'react'
import type { FC } from 'react'

import { Modal } from 'antd'
import BaseForm, { IFormItem } from './base-form'
import { FormInstance, FormLayout } from 'antd/es/form/Form'

export interface IProps {
  isModalOpen: boolean
  handleCancel: () => void
  onFinish?: (values: any) => void // 提交的回调函数
  data: IFormItem[] // 表单列表信息
  form: FormInstance<any> // 表单
  initialValues?: any // 默认值
  title?: string
  labelCol?: number // label的宽度 不是px 1~10
  maxWidth?: number // 表单最大宽度 px
  layout?: FormLayout // 表单布局
  cancelText?: string // 取消按钮文本
  okText?: string // 确认按钮文本
}

const BaseModalForm: FC<IProps> = memo(function (props) {
  const {
    isModalOpen,
    handleCancel,
    onFinish,
    data,
    form,
    title = '默认标题',
    initialValues,
    labelCol,
    layout,
    maxWidth,
    cancelText = '取消',
    okText = '确认'
  } = props

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            console.log(
              '🚀 ~ file: base-modal-form.tsx:46 ~ .then ~ values:',
              values
            )
            onFinish && onFinish(values)
            form.resetFields()
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
      onCancel={handleCancel}
      cancelText={cancelText}
      okText={okText}
    >
      <BaseForm
        data={data}
        form={form}
        labelCol={labelCol}
        initialValues={initialValues}
        layout={layout}
        maxWidth={maxWidth}
      />
    </Modal>
  )
})

export default BaseModalForm

// 设置一个方便调试的name 可以不写 默认为组件名称
BaseModalForm.displayName = 'BaseModalForm'
