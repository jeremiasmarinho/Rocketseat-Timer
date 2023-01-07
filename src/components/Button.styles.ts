import styled, { css } from "styled-components";

import { ButtonVariant } from "../components/Button";

interface ButtonContainerProps {
  variant: ButtonVariant;
  }

  const ButtonVariant = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
  };

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 180px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  
  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme['white']}

/*  ${props => {
    return css`
      background-color: ${ButtonVariant[props.variant]}
    `
  }} */
`
