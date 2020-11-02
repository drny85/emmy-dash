import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../pages/auth/Login';

import { useSelector } from 'react-redux';

const AdminRoutes = ({ component: Component, ...rest }) => {
  const { user, loading } = useSelector((state) => state.userData);

  //if (!user) return <Login />

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user && !loading && user.isAdmin) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default AdminRoutes;
