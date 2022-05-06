import { useNavigate } from "react-router-dom";

export default function Redirection() {
  const navigate = useNavigate();

  function redirect() {
    console.log('traitement condition, etc ...');
    navigate('/');
  }

  return (
    <>
      <h3>Utiliser la redirection</h3>

      <button type="button" onClick={redirect}>
        Être redirigé vers l'accueil</button>
    </>
  );
}