import React from 'react';
import { Button } from 'antd';
import './index.scss';
import { useHistory } from 'react-router-dom';
import { auth } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { logOut } from '@redux/actions';

const Navbar = ({ locale }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logOut());
    history.push(auth);
  };

  return (
    <section className="navbar-wrapper">
      <div className="navbar">
        <Button onClick={handlerLogout}>{locale.navbar.logout}</Button>
      </div>
    </section>
  );
};

export default Navbar;
