import SignIn from "../components/SignIn";
import { useState } from 'react';
import SignOut from '../components/SignOut';
import { useLocation, Navigate } from 'react-router-dom';

export default function Authentication() {
  const [isAuthenticate, setAuthenticate] = useState(sessionStorage.getItem('auth') === 'true' || false);
  const location = useLocation();
  let content = null;

  const redirect = location.state?.redirect?.pathname;

  function authentication(value) {
    sessionStorage.setItem('auth', value);
    setAuthenticate(value);
  }

  content = (isAuthenticate) ? (redirect) ? <Navigate to={redirect} replace /> : <SignOut fn={authentication} /> : <SignIn fn={authentication} />

  return content;
}