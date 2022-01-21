import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 1.8rem;
    color: #cccc;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    max-width: 530px;
    height: auto;

    padding: 40px 30px;
    border: 2px solid;
    border-image-source: linear-gradient(to right, #880074, #ff417b);
    border-image-slice: 1;

    a{
        font-size: 1rem;
        font-weight: 600;
        color: #cccc;
        text-align: center;
        margin-top: 20px;
    }

`;

export const WrapperInput = styled.div`
    margin: 10px 0px;
`;

export const Label = styled.label`
    font-size: 12px;
    color: #cccc;
`;

export const EditInput = styled(Input)`
    border-bottom: 1px solid #cccc;

    &:focus{
        border-image-source: linear-gradient(to right, #880074, #ff417b);
        border-image-slice: 1;
    }
   
`
export const EditButton = styled(Button)`
    //width: 60%;
    margin: 20px auto;
    border-radius: 25px;
    background-image: linear-gradient(to right, #880074, #ff417b);
   
`
