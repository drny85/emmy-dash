import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const { user, loading } = useSelector((state) => state.userData);

  //if (!user) return <Login />

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user && !loading) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoutes;
