import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    this.populateUsers();
  }

  static renderUsersTable(users) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.latitude}</td>
              <td>{user.longitude}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderUsersTable(this.state.users);

    return (
      <div>
        <h1 id="tabelLabel" >All Users</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateUsers() {
    const response = await fetch('https://meeet-projeto.azurewebsites.net/api/meeet/getusers', { mode: 'cors' });
    const data = await response.json();
    console.log(data);
    this.setState({ users: data, loading: false });
  }
}
