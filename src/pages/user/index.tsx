import React from 'react'

import { Button, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'

import { formatTimeV1, mapRole } from '@/utils'
import { TestUserList } from '@/data/user-data'
import useTable from '@/hooks/useTable'
import { IUser } from '@/type'
import { TestRoleList } from '@/data/role-data'
import { TestForm } from '@/components/base-form/test-form'
import BaseModal from '@/components/base-modal'
import useBaseModal from '@/hooks/useBaseModal'
import BaseForm from '@/components/base-form'
import useBaseForm from '@/hooks/useBaseForm'

const UserList = function () {
  const { rowSelection, pagination, loading, handleTableChange } = useTable()
  const { isOpen, handleOpen, handleCancel, } = useBaseModal()
  const { form } = useBaseForm()

  function handleOk() {
    form
      .validateFields()
      .then((values) => {
        form.resetFields()
      })
      .catch((info) => {
        console.log('Validate Failed:', info)
      })
  }

  // 映射表格的每一列
  const columns: ColumnsType<IUser> = [
    {
      title: '用户名',
      dataIndex: 'username',
      render: (value: string, item: IUser) => {
        return <span className="cursor-pointer">{value}</span>
      }
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      render: (value: number) => {
        // 如果手机号不存在就展示/
        return <div>{value ? value : '/'}</div>
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createtime', // dataIndex必须映射好 不如render拿不到数据
      render: (value: number) => {
        return <div>{value ? formatTimeV1(value) : '/'}</div>
      }
    },
    {
      title: '最近更新时间',
      dataIndex: 'updatetime',
      render: (value: number) => {
        return <div>{value ? formatTimeV1(value) : '/'}</div>
      }
    },
    {
      title: '角色',
      dataIndex: 'role',
      render: (value: string) => {
        return <Tag color="success">{mapRole(TestRoleList, value)}</Tag>
      }
    },
    {
      title: '操作',
      render: (item: IUser) => {
        return (
          <div className="flex gap-3 ">
            <Button type="primary" icon={<FormOutlined />} onClick={handleOpen}>
              编辑
            </Button>
            <Button type="primary" icon={<DeleteOutlined />} danger>
              删除
            </Button>
          </div>
        )
      }
    }
  ]

  return (
    <div className="p-[20px] ">
      {/* 表格 */}
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        rowSelection={rowSelection}
        dataSource={TestUserList}
        pagination={{ ...pagination, total: TestUserList.length }}
        loading={loading}
        onChange={handleTableChange}
      />

      {/* 表单模态框 */}
      <BaseModal open={isOpen} handleCancel={handleCancel} handleOk={handleOk}>
        <BaseForm form={form} data={TestForm} labelCol={3} ></BaseForm>
      </BaseModal>
    </div>
  )
}

export default UserList
