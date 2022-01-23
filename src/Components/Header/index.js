import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg'

import { useAuth } from '../../Context/authContext'

import { Container, EditButton, Navigation, Logo } from './styles';

function Header() {
  const { user, logOut } = useAuth()

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      {
        user ? <Navigation>
          <span>Olá, {user?.name}</span>
          <EditButton  onClick={logOut}>Sair</EditButton>
        </Navigation> :
          <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/signin'>Sign In</Link>
            <Link to='/signup'>Sign Up</Link>
          </Navigation>
      }
    </Container>
  );
}

export default Header;