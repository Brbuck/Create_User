import styled from 'styled-components';

import Button from '../Button'

export const Container = styled.header`
    width: 100%;
    height: 60px;
    padding: 8px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #555;
    
`;

export const Logo = styled.img`
    width: 50px;
`

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;

    a{
        color: #fff;
        margin-left: 50px;
        padding: 8px;
    }

`

export const EditButton = styled(Button)`
    width: 40%;
    margin: 20px auto;
    border-radius: 25px;
    background-image: linear-gradient(to right, #880074, #ff417b);
   
`

