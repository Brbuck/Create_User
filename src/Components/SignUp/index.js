import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, Label, EditInput, EditButton, Register, Title, WrapperInput } from './styles';


function SignUp() {
    return (
        <Container>
            <Form>
            <img src='https://thumbs.dreamstime.com/b/o-fundo-preto-e-branco-riscado-do-grunge-no-formul%C3%A1rio-do-sol-irradia-94198524.jpg' />
                <Register>
                    <Title>Sign Up</Title>
                    <WrapperInput>
                        <Label>Name</Label>
                        <EditInput type='text' autoFocus />
                    </WrapperInput>
                    <WrapperInput>
                        <Label>Email</Label>
                        <EditInput focus type='email' />
                    </WrapperInput>
                    <WrapperInput>
                        <Label>Password</Label>
                        <EditInput type='password' />
                    </WrapperInput>
                    <WrapperInput>
                        <Label>Confirm Password</Label>
                        <EditInput type='password' />
                    </WrapperInput>
                    <EditButton>Sign In</EditButton>
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