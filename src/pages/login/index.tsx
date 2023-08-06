import React from 'react'

import BaseForm from '@/components/base-form'
import { loginForm } from '@/components/base-form/login-form'
import { Button } from 'antd'

import loginImg from '@/assets/img/pinia.png'
import useLogin from '@/hooks/useLogin'
import useBaseForm from '@/hooks/useBaseForm'

const Login = function () {
  const { login } = useLogin()
  const { form } = useBaseForm()

  return (
    <div className=" bg-gray-600 h-[100vh] flex items-center justify-center ">
      <div className="bg-white  w-[900px] rounded-md overflow-hidden flex justify-between  ">
        <div className="p-5  flex-1 flex flex-col justify-between ">
          <h2>登录</h2>
          <BaseForm
            data={loginForm}
            form={form}
            labelCol={4}
            buttonLayout="center"
            onFinish={login}
          >
            {/* 需要有submit */}
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </BaseForm>
          <div>
            <a className="text-xs mr-2 cursor-pointer">注册账号</a>
            <a className="text-xs cursor-pointer">找回密码</a>
          </div>
        </div>
        <img className="w-[500px] object-cover" src={loginImg} alt="" />
      </div>
    </div>
  )
}

export default Login

// 设置一个方便调试的name 可以不写 默认为组件名称
Login.displayName = 'Login'
