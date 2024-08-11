import Link from 'next/link';
import React from 'react'

interface User{
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch ("https://jsonplaceholder.typicode.com/users", 
    {cache: "no-store"}
  );
  const users: User[]= await res.json();

  return (
    <>
    <h1> Users </h1>
    <table className="table table-border">
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <tr key={user.id}>
          <th>{user.name}</th>
          <th>{user.email}</th>
          </tr>)}
      </tbody>
    </table><br/>
    <p>{new Date().toLocaleTimeString()}</p>
    <br />
    <Link href = "./sideMenu"> Return </Link>
    </>
  )
}

export default UsersPage