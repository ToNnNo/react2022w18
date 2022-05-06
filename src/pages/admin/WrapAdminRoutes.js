import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function WrapAdminRoutes(props) {
  const isAuthenticate = sessionStorage.getItem('auth') === 'true' || false;
  const location = useLocation();

  return isAuthenticate ? <Outlet /> : <Navigate to={props.redirect} state={{ redirect: location }} replace />

}