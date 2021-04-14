import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import Auth from '@components/Auth';

const LoginPage = () => {
  const locale = useSelector((state) => state.localeReducer.locale.login_page);

  return (
    <div className="auth-page">
      <Auth locale={locale} />
    </div>
  );
};

export default LoginPage;
