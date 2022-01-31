import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { useAuth } from '../../Context/authContext'
import { Container, Form, Label, EditInput, EditButton, Title, WrapperInput } from './styles';


function SignIn() {
  const { authenticate } = useAuth()

  const { register, handleSubmit } = useForm({
  });

  async function Login({ email, password }) {
    try {
      await authenticate({ email, password })
    } catch (error) {
      alert(error.response.data.error);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(Login)} >
        <Title>Log In</Title>
        <WrapperInput>
          <Label>Email</Label>
          <EditInput type="email"  {...register("email")} placeholder="e-mail" autoFocus />
        </WrapperInput>
        <WrapperInput>
          <Label>Password</Label>
          <EditInput type="password" name="password" {...register("password")} placeholder="password" />
        </WrapperInput>
        <EditButton type="submit">Sign In</EditButton>
        <Link to='#'>Forgot  username or password?</Link>
        <Link to='/signup'>Create your account</Link>
      </Form>
    </Container>
  );
}

export default SignIn;
