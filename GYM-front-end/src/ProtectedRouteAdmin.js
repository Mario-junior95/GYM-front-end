import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouteUser = ({
  isAdminAuth: isAdminAuth,
  component: Component,
  ...rest
}) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (isAdminAuth) {
            return <Component />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/admin-Login",
                  state: { from: props.location },
                }}
              />
            );
          }
        }}
      />
    </div>
  );
};

export default ProtectedRouteUser;
