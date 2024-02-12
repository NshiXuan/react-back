import React from 'react'

import useTable from '@/hooks/useTable'
import { IRole } from '@/type'
import { DeleteOutlined, FormOutlined } from '@ant-design/icons'
import { Button, Popconfirm, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { TestRoleList } from '@/data/role-data'

const Role = function () {
  const { rowSelection, loading } = useTable()

  // 映射表表格的每一列
  const columns: ColumnsType<IRole> = [
    {
      title: '角色名称',
      dataIndex: 'name',
      render: (value: string) => {
        return <Tag color="success">{value}</Tag>
      }
    },
    {
      title: '描述',
      dataIndex: 'description'
    },
    {
      title: '操作',
      render: (item: IRole) => {
        return (
          <div className="flex gap-3 ">
            <Button type="primary" icon={<FormOutlined />}>编辑</Button>
            <Popconfirm title="确认删除吗？" cancelText="取消" okText="确认" onConfirm={() => { }}>
              <Button type="primary" icon={<DeleteOutlined />} danger>删除</Button>
            </Popconfirm>
          </div>
        )
      }
    }
  ]

  return (
    <div className="p-[20px] ">
      {/* 表格 pagination 取消分页器 */}
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        pagination={false}
        rowSelection={rowSelection}
        dataSource={TestRoleList}
        loading={loading}
      />
    </div>
  )
}

export default Role


