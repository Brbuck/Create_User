import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {api} from "../../api"

import { Container, Form, Label, EditInput, EditButton, Register, Title, WrapperInput } from './styles';


function SignUp() {
    let navigate = useNavigate()

    const { register, handleSubmit } = useForm({
    });

    async function registerUser({ name, email, password, confirmpassword}) {
        try {
            await api.post('/auth/register', { name, email, password, confirmpassword})
              navigate('/signin')
          } catch (error) {
              alert(error.response.data.msg);
          }
      }
    return (
        <Container>
            <Form onSubmit={handleSubmit(registerUser)}>
            <img src='https://thumbs.dreamstime.com/b/o-fundo-preto-e-branco-riscado-do-grunge-no-formul%C3%A1rio-do-sol-irradia-94198524.jpg' alt=''/>
                <Register>
                    <Title>Sign Up</Title>
                    <WrapperInput>
                        <Label>Name</Label>
                        <EditInput type="text" name="name" {...register("name")} autoFocus />
                    </WrapperInput>
                    <WrapperInput>
                        <Label>Email</Label>
                        <EditInput type="email" name="email" {...register("email")} />
                    </WrapperInput>
                    <WrapperInput>
                        <Label>Password</Label>
                        <EditInput type="password" name="password" {...register("password")} />
                    </WrapperInput>
                    <WrapperInput>
                        <Label>Confirm Password</Label>
                        <EditInput type="password" name="confirmpassword" {...register("confirmpassword")} />
                    </WrapperInput>
                    <EditButton type="submit">Sign In</EditButton>
                    <WrapperInput>
                        <EditInput type='checkbox' />
                        <span>I agree with <strong>privacy</strong> and <strong>policy</strong></span>
                    </WrapperInput>
                    <Link to='/signin'>Sign In</Link>
                </Register>
            </Form>
        </Container>
    );
}

export default SignUp;