import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Form, Label, EditInput, EditButton, Title, WrapperInput } from './styles';


function SignIn() {
  return (
    <Container>
      <Form>
        <Title>Log In</Title>
        <WrapperInput>
          <Label>Email</Label>
          <EditInput focus type='email' placeholder="e-mail" autoFocus  />
        </WrapperInput>
        <WrapperInput>
          <Label>Password</Label>
          <EditInput type='password' placeholder="password" />
        </WrapperInput>
        <EditButton>Sign In</EditButton>
        <Link to='#'>Forgot  username or password?</Link>
        <Link to='#'>Create your account</Link>
      </Form>
    </Container>
  );
}

export default SignIn;