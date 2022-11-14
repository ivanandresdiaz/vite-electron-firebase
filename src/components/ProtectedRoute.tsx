import React, { ReactElement, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

type TypeProtectedRoute = {
  isAllowed: boolean;
  redirectTo?: `/${string}`;
  children?: ReactElement;
};

const ProtectedRoute = (props: TypeProtectedRoute): ReactElement => {
  const { isAllowed, redirectTo = "/", children } = props;
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }
  return children || <Outlet />;
};

export default ProtectedRoute;
