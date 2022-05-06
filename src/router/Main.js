import { Route, Routes } from "react-router-dom";
import Assets from "../pages/Assets";
import Exercice from "../pages/Exercice";
import Formulaire from "../pages/Formulaire";
import Fragment from "../pages/Fragment";
import Home from '../pages/Home';
import Hooks from "../pages/Hooks";
import Introduction from '../pages/Introduction';
import State from '../pages/State';
import Users from "../pages/Users";
import RouterDom from '../pages/RouterDom';
import NotFound from '../pages/errors/NotFound';
import Composition from '../pages/Composition';
import Authentication from "../pages/Authentication";
import WrapAdminRoutes from "../pages/admin/WrapAdminRoutes";
import AddUsers from "../pages/AddUsers";
import Redux from "../pages/Redux";

export default function Main() {  
  return (
    <Routes>
      <Route index element={ <Home /> } />
      <Route path="introduction" element={ <Introduction /> } />
      <Route path="fragment" element={ <Fragment /> } />
      <Route path="assets" element={ <Assets /> } />
      <Route path="state" element={ <State /> } />
      {/*<Route path="users" element={ <Users /> } />*/}
      <Route path="hooks" element={ <Hooks /> } />
      <Route path="exercice" element={ <Exercice /> } />
      <Route path="router/*" element={ <RouterDom /> } />
      <Route path="composition" element={ <Composition /> } />
      <Route path="connexion" element={ <Authentication /> } />
      <Route path="admin" element={<WrapAdminRoutes redirect="/connexion" />}>
        <Route index element={ <h2>Welcome Admin!</h2> } />
        <Route path="users" element={ <Users /> } />
        <Route path="users/add" element={ <AddUsers /> } />
      </Route>
      <Route path="formulaire" element={ <Formulaire /> } />
      <Route path="*" element={ <NotFound /> } />
      <Route path="redux" element={ <Redux /> } />
    </Routes>
  );
}
