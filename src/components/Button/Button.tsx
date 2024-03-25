import { ButtonProps } from './Button.types';
import styled, {css} from 'styled-components';


const StyledButton = styled.button<ButtonProps>`
  border: none;
  background-color: #ea4f4f;
  padding: 16px 32px;
  border-radius: 10px;
  color: white;
  cursor:pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: 0.5s;

  ${(props) =>
    props.disabled &&
    css`
        background-color: #504f4f;
        cursor: not-allowed;
    `}

    ${(props) =>
    props.hovered &&
    css`
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        border-radius: 20px;
    `}

    ${(props) =>
    props.clicked &&
    css`
        background-color:  #ee3333;
    `}
`;
const Button = (props: ButtonProps) => {
    return (
        <StyledButton
          disabled={props.disabled}
          content={props.content}
          clicked={props.clicked}
          hovered={props.hovered}
        >
          {props.content}
        </StyledButton>
    );
};

export default Button;