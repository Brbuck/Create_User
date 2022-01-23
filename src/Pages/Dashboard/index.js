import React from 'react';
import { useAuth } from '../../Context/authContext'

import { Container } from './styles'

function Dashboard() {
  const { user } = useAuth()
  return (
    <Container>
      <h1>Bem vindo novamente {user?.name}</h1>
    </Container>
  );
}

export default Dashboard;