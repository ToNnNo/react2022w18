import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/introduction">Introduction</Link>
        </li>
        <li>
          <Link to="/fragment">Les Fragments</Link>
        </li>
        <li>
          <Link to="/assets">Les assets</Link>
        </li>
        <li>
          <Link to="/state">L'état local</Link>
        </li>
        <li>
          {/*<Link to="/users">Utilisateurs</Link>*/}
          <Link to="/admin/users">Utilisateurs</Link>
        </li>
        <li>
          <Link to="/hooks">Les Hooks</Link>
        </li>
        <li>
          <Link to="/exercice">Exercice</Link>
        </li>
        <li>
          <Link to="/router">React Router DOM</Link>
        </li>
        <li>
          <Link to="/composition">Composition</Link>
        </li>
        <li>
          <Link to="/connexion">Authentication</Link>
        </li>
        <li>
          <Link to="/formulaire">Les Formulaires</Link>
        </li>
        <li>
          <Link to="/redux">Redux</Link>
        </li>
      </ul>
    </nav>
  );
}