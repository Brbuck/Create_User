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
    color: #777;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    
    width: 100%;
    max-width: 800px;
    height: auto;

    padding: 40px 30px;
    border: 3px solid;
    border-image-source: linear-gradient(to right, #880074, #ff417b);
    border-image-slice: 1;

    background-color: #FFFF;

    a{
        font-size: 1rem;
        font-weight: 600;
        color: #777;
        text-align: center;
        margin-top: 20px;
    }

    img{
        height: 460px;
        width: 100%;
        max-width: 340px;

        @media screen and (max-width: 600px){
            display: none;
        }
    }

`;

export const Register = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    max-width: 530px;
    height: auto;
    padding: 0 0 0 30px;

`

export const WrapperInput = styled.div`
    margin: 10px 0px;

    &:nth-child(7){
        display: flex;
        align-items: center;

        input{
            width: 40px;
            height: 20px;
        }

        span{
            color:#777;
            strong{
                color: #ff417b;
            }
        }
    }

    p{
        color: red;
    }
    
`;

export const Label = styled.label`
    font-size: 15px;
    color: #ff417b;
    
`;

export const EditInput = styled(Input)`
    border-bottom: 1.5px solid #777;
    color: #777;

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
