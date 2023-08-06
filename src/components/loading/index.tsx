import { Spin } from 'antd'
import React from 'react'

// loading需要父组件使用定位才居中显示
const Loading = function () {
  return (
    <div className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 z-10 bg-[rgb(255,255,255,.5)]">
      <Spin tip="加载中" size="large">
        <div className="w-[200px]" />
      </Spin>
    </div>
  )
}

export default Loading

// 设置一个方便调试的name 可以不写 默认为组件名称
Loading.displayName = 'Loading'
