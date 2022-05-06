import Header from "../components/Header";
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Redirection from './RouterDOM/Redirection';
import Params from "./RouterDOM/Params";
import Dashboard from './RouterDOM/Dashboard';

const RouterDom = () => {
  return (
    <>
      <Header title="React Router DOM" />

      <nav>
        <ul className="nav">
          <li>
            <Link to="">Welcome</Link>
          </li>
          <li>
            <Link to="react">React 18</Link>
          </li>
          <li>
            <Link to="old-react">React 15</Link>
          </li>
          <li>
            <Link to="redirect">Redirection</Link>
          </li>
          <li>
            <Link to="john">Salut John</Link>
          </li>
          <li>
            <Link to="jane">Salut Jane</Link>
          </li>
          <li>
            <Link to="dashboard">Tableaux de bord</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<h3>Bienvenue sur notre sous navigation</h3>} />
        <Route path='react' element={<h3>Formation React 18 + Redux</h3>} />
        <Route path='old-react' element={<Navigate to="/router/react" />} />
        <Route path='redirect' element={<Redirection />} />
        <Route path=':name' element={<Params />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route path='users' element={ <h4>Liste des utilisateurs</h4>} />
          <Route path='invoices' element={ <h4>Liste des factures</h4>} />
        </Route>
      </Routes>

    </>
  )
}

export default RouterDom;

/*
export default function RouterDom() {
    return (
        <>
            <Header title="React Router DOM" />


        </>
    )
}*/