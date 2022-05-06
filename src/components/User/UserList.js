import React from "react";
import Address from '../Address';
import './UserList.css';
import { Link } from "react-router-dom";

export default class UserList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {users: []}
  }

  async componentDidMount() {
    console.log('umh ...')

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      this.setState({users}); // { users: users }
    } catch (e) {

    }
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <>
        <div style={{marginBottom: '10px'}}>
          <Link to="/admin/users/add">Ajouter un utilisateur</Link>
        </div>
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
          {this.state.users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Address address={user.address}/>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </>
    )
  }
}
