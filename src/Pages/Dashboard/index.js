import React from 'react';
import { useAuth } from '../../Context/authContext'

function Dashboard() {
    const {user, logOut} = useAuth()
  return (
      <div style={{margin: '200px 200px'}}>
          <span>Dashboard</span>
          <span>{user?.name}</span>
          <span>{user?._id}</span>
         <button onClick={logOut}>Sair</button>
      </div>
  );
}

export default Dashboard;