import { Button, Result } from 'antd'
import React from 'react'
import { ReactNode } from 'react'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export interface IProps {
  children?: ReactNode
}

const NoFound: FC<IProps> = function (props) {
  const nav = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="页面不存在"
      extra={
        <Button type="primary" onClick={() => nav('/')}>
          返回首页
        </Button>
      }
    />
  )
}

export default NoFound

// 设置一个方便调试的name 可以不写 默认为组件名称
NoFound.displayName = 'NoFound'
