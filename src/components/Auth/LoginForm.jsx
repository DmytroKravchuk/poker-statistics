import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { GoogleLogin } from 'react-google-login';
import { auth } from '@redux/actions';

const LoginForm = ({ locale, layout, tailLayout, setAuthType }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const googleSuccess = (res) => {
    try {
      dispatch(auth(res));
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (err) => {
    console.log('Google Sign in is failed');
    console.log(err);
  };

  const handleSubmit = () => {
    console.log(2222);
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
        <Button
          type="primary"
          htmlType="submit"
          onSubmit={() => handleSubmit()}
        >
          {locale.sign_in}
        </Button>
      </Form.Item>
      <GoogleLogin
        clientId="978094906427-ufq1hh2hk411me9l60qlsa0p2qcn5ri0.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button
            type="primary"
            className="google-button"
            disabled={renderProps.disabled}
            onClick={renderProps.onClick}
            variant="containt"
            icon={<GoogleOutlined />}
          >
            {locale.google_sign_in}
          </Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
      <p className="bottom-message">
        {locale.register_message}{' '}
        <Button onClick={() => setAuthType('register')}>
          {locale.sign_up}
        </Button>
      </p>
    </Form>
  );
};

export default LoginForm;
