import React, { useState } from 'react';
import LoginForm from '@components/Auth/LoginForm';
import RegisterForm from '@components/Auth/RegisterForm';
import Logo from '@/assets/img/logo.jpg';
import './index.scss';

const Auth = ({ locale }) => {
  const [authType, setAuthType] = useState('login');

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

  return (
    <div className="auth-wrapper">
      <div className="logo">
        <img src={Logo} alt="logo" className="logo-img" />
      </div>
      {authType === 'login' && (
        <LoginForm
          locale={locale}
          layout={layout}
          tailLayout={tailLayout}
          setAuthType={setAuthType}
        />
      )}
      {authType === 'register' && (
        <RegisterForm
          locale={locale}
          layout={layout}
          tailLayout={tailLayout}
          setAuthType={setAuthType}
        />
      )}
    </div>
  );
};

export default Auth;
