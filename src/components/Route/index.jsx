import React, { useEffect, useState } from 'react';
import LoginPage from '@components/LoginPage';

const Rout = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

  return <div>{!user ? <LoginPage /> : <div>another pages</div>}</div>;
};

export default Rout;
