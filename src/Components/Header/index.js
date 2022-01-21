import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg'

import { Container, Navigation, Logo } from './styles';

function Header() {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Navigation>
        <Link to='/'>Home</Link>
        <Link to='/signin'>Sign In</Link>
        <Link to='/signup'>Sign Up</Link>
      </Navigation>
    </Container>
  );
}

export default Header;