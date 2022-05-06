import { useCallback, useEffect, useState } from "react";
import './User/UserList.css';
import Address from './Address';

export default function StateUserList() {
  const [users, setUsers] = useState([]);

  const loadUser = useCallback(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    setUsers(users);
  }, []);

  useEffect( () => {
    loadUser();
  }, [loadUser]);

  return (
    <>
      <h2>useState Utilisateur</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map( user => {
            return (
              <tr key={user.id}>
                <td>{ user.id }</td>
                <td>{ user.name }</td>
                <td>{ user.username }</td>
                <td>{ user.email }</td>
                <td>
                  <Address address={user.address } />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}