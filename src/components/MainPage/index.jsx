import React from 'react';
import Navbar from '@components/Navbar';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const { locale } = useSelector((state) => state.localeReducer);

  return (
    <div className="page">
      <Navbar locale={locale} />
    </div>
  );
};

export default MainPage;
