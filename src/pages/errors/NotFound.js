import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function NotFound() {

  return (
    <>
      <Header title="Not Found" />
      <p>Cette page semble ne pas exister ...</p>
      <p>Revenir à la <Link to="/">page d'accueil</Link></p>
    </>
  )
}