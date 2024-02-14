import React, { Children } from 'react'
import { memo, ReactNode, useEffect } from 'react'
import type { FC } from 'react'

import Form, { Rule } from 'antd/es/form'
import TextArea from 'antd/es/input/TextArea'
import { DatePicker, Input, Radio, Select } from 'antd'
import { FormInstance, FormLayout } from 'antd/es/form/Form'
import { SizeType } from 'antd/es/config-provider/SizeContext'

const { RangePicker } = DatePicker

export type IFormItemType =
  | 'input'
  | 'password'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'datePicker'
  | 'rangePicker'

export interface IFormItem {
  type: IFormItemType
  name: string
  label: string
  placeholder?: string
  rules?: Rule[]
  hidden?: boolean // 是否隐藏input
  options?: {
    // 选择框、单选、多选需要
    value: string
    label: string
  }[]
  allowClear?: boolean
  rows?: number // textarea的行数
  size?: SizeType // 输入框尺寸
  disabled?: boolean // 是否禁用
}

export interface IProps {
  children?: ReactNode // submit类型的按钮
  data?: IFormItem[] // 映射表单列表的信息
  form: FormInstance<any> // 表单
  initialValues?: any // 默认值
  onFinish?: (values: any) => void // 提交的回调函数
  labelCol?: number // label的宽度 不是px 1~10
  maxWidth?: number // 表单最大宽度 px
  layout?: FormLayout // 布局
  childLayout?: 'left' | 'center' // 底部按钮布局
}

// memo浅层比较
const BaseForm: FC<IProps> = memo(function (props) {
  console.log('🚀 ~ file: index.tsx:172 ~ BaseForm:', 'BaseForm')

  const {
    data,
    form,
    initialValues,
    labelCol,
    maxWidth,
    layout,
    childLayout,
    onFinish,
    children
  } = props

  // 默认值
  useEffect(() => {
    initialValues
      ? form.setFieldsValue({
        ...initialValues
      })
      : form.resetFields()
  }, [initialValues])

  // 渲染FormItem的方法
  function renderFormItem(item: IFormItem) {
    if (item.type === 'input') {
      return (
        <Input
          hidden={item.hidden}
          placeholder={item.placeholder}
          allowClear={item.allowClear}
          disabled={item.disabled}
          size={item.size}
        />
      )
    } else if (item.type === 'password') {
      return (
        <Input.Password
          placeholder={item.placeholder}
          allowClear={item.allowClear}
          size={item.size}
          disabled={item.disabled}
        />
      )
    } else if (item.type === 'select') {
      return (
        <Select
          placeholder={item.placeholder}
          style={{ width: 120 }}
          allowClear={item.allowClear}
          options={item.options}
          disabled={item.disabled}
        />
      )
    } else if (item.type === 'radio') {
      return (
        <Radio.Group>
          {item.options?.map((option) => {
            return (
              <Radio value={option.value} key={option.label}>
                {option.label}
              </Radio>
            )
          })}
        </Radio.Group>
      )
    } else if (item.type === 'textarea') {
      return (
        <TextArea
          placeholder={item.placeholder}
          allowClear={item.allowClear}
          disabled={item.disabled}
          rows={item.rows ? item.rows : 4}
        />
      )
    } else if (item.type === 'datePicker') {
      return <DatePicker allowClear={item.allowClear} />
    } else if (item.type === 'rangePicker') {
      return <RangePicker allowClear={item.allowClear} />
    }
  }

  return (
    <Form
      form={form}
      labelCol={{ span: labelCol }}
      style={{ maxWidth }}
      onFinish={onFinish}
      layout={layout}
    >
      <Form.Item hidden name="id" label="id">
        <Input placeholder="请输入id" />
      </Form.Item>
      {data?.map((item) => {
        return (
          <Form.Item
            key={item.name}
            name={item.name}
            label={item.label}
            rules={item.rules}
          >
            {renderFormItem(item)}
          </Form.Item>
        )
      })}

      {children && (
        <Form.Item
          className={`flex ${childLayout == 'left' ? childLayout : 'justify-center'
            }`}
        >
          {children}
        </Form.Item>
      )}
    </Form>
  )
})

export default BaseForm

// 设置一个方便调试的name 可以不写 默认为组件名称
BaseForm.displayName = 'BaseForm'
