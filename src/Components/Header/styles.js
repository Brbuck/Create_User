import styled, { keyframes } from 'styled-components';

const LogoSpin = keyframes`  
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  
`;

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
    animation: ${LogoSpin} infinite 15s linear;
`
export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        color: #fff;
        margin-left: 15px;
        padding: 8px;
    }

`

