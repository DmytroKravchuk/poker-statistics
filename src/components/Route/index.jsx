import React, { useEffect, useState } from 'react';
import LoginPage from '@components/LoginPage';
import MainPage from '@components/MainPage';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@redux/actions';

const Rout = () => {
  const { authData } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(async () => {
    const token = user?.token;
    dispatch(auth(JSON.parse(localStorage.getItem('profile'))));
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

  return (
    <div className="page-route-block">
      {user && authData?.token ? <MainPage /> : <LoginPage />}
    </div>
  );
};

export default Rout;
