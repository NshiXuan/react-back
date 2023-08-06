import { TablePaginationConfig } from 'antd'
import { useState } from 'react'

export default function useTable() {
  // 记录是否勾选复选框的item
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  // 是否打开table的loading
  const [loading, setLoading] = useState(false)
  // 分页器的配置
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1, // 当前页面
    pageSize: 10, // 当前数据数
    position: ['bottomCenter'] // 分页器的位置
  })

  // 点击复选框
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  // 复选框
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  // 点击下一页或者页数的改变
  const handleTableChange = (newPagination: TablePaginationConfig) => {
    // 1.重新发请求渲染数据
    const { current = 1, pageSize = 10 } = newPagination

    // 2.更新分页器
    setPagination({ ...pagination, current })
  }

  return {
    selectedRowKeys,
    rowSelection,
    pagination,
    loading,
    handleTableChange
  }
}
