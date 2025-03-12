import React, { cache } from 'react'
import Time from '../components/Time';
import NavigationBar from '../components/NavigationBar/NavigationBar';

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
  return (
    <>
      <NavigationBar/>
      <h1>Users</h1>
      <Time/>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage