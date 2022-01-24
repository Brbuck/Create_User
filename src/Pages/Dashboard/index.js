import React from 'react';
import { useAuth } from '../../Context/authContext'
import Loading from '../../Components/Loading'

import { Container } from './styles'

function Dashboard() {
  const { user } = useAuth();

  if(!user) return <Loading/>
  return (
    <Container>
      <h1>Bem vindo novamente {user?.name}</h1>
    </Container>
  );
}

export default Dashboard;