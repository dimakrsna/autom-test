import styled from 'styled-components';
import Button from '@mui/material/Button';

export const ButtonStyled = styled(Button)`
  margin-left: 10px;

  @media screen and (max-width: 500px){
    min-width: auto;
  }  

  @media screen and (max-width: 375px){
    display: none;
  }
`

export const LogoWrapper = styled.div`
  max-width: 160px;
  display: flex;
  align-items: center;
  cursor: pointer;
`