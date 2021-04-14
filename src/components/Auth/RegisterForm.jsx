import React from 'react';
import { Button, Form, Input } from 'antd';

const RegisterForm = ({ locale, layout, tailLayout, setAuthType }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
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
        label={locale.email_field}
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
            message: locale.required_messages.email,
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
      <Form.Item
        label={locale.repeat_password_field}
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
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {locale.sign_up}
        </Button>
      </Form.Item>
      <p className="bottom-message">
        {locale.register_message}{' '}
        <Button onClick={() => setAuthType('login')}>{locale.sign_in}</Button>
      </p>
    </Form>
  );
};

export default RegisterForm;
