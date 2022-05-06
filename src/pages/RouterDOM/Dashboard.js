import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {

  return (
    <>
      <h3>Tableaux de bord</h3>
      <nav>
        <Link to="users">Utilisateurs</Link> -{" "} 
        <Link to="invoices">Factures</Link>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  )

}