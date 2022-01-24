import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import {schema} from '../../Schema'
import {api} from "../../api"

import { Container, Form, Label, EditInput, EditButton, Register, Title, WrapperInput } from './styles';


function SignUp() {
    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    async function registerUser({ name, email, password, confirmPassword}) {
        try {
            await api.post('/auth/register', { name, email, password, confirmPassword})
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
                        <p className='errors'>{errors.name?.message}</p>
                    </WrapperInput>
                    <WrapperInput>
                        <Label>Email</Label>
                        <EditInput type="email" name="email" {...register("email")} />
                        <p className='errors'>{errors.email?.message}</p>
                    </WrapperInput>
                    <WrapperInput>
                        <Label>Password</Label>
                        <EditInput type="password" name="password" {...register("password")} />
                        <p className='errors'>{errors.password?.message}</p>
                    </WrapperInput>
                    <WrapperInput>
                        <Label>Confirm Password</Label>
                        <EditInput type="password" name="confirmpassword" {...register("confirmPassword")} />
                        <p className='errors'>{errors.confirmPassword?.message}</p>
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