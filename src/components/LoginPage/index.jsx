import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useSelector } from 'react-redux';
import './index.scss';
import Logo from '../../assets/img/logo.jpg';

const layout = {
  layout: 'vertical',
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 24,
  },
};

const LoginPage = () => {
  const locale = useSelector((state) => state.localeReducer.locale.login_page);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-page">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            className="logo-img"
          />
        </div>
        <Form.Item
          label={locale.username_field}
          name="username"
          rules={[
            {
              required: true,
              message: locale.required_messages.login,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={locale.password_field}
          name="password"
          rules={[
            {
              required: true,
              message: locale.required_messages.password,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>{locale.remember_me_field}</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {locale.submit}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
