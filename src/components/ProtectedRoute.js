import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = (
  {
    isAuthorized,
    redirectTo,
    component: Component,
    ...rest
  }
) => (
  <Route
    {...rest}
    render={
      props => isAuthorized
        ? (<Component {...props}/>)
        : <Redirect to={{pathname: redirectTo}}/>
    }
  />
);