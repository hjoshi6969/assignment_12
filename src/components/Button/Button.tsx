import styled, { css } from 'styled-components';

interface ButtonProps {
  content: string;
  disabled?: boolean;
  background?: string;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    background-color: aliceblue;
  }

  ${(props) => css`
    background-color: ${props.background || 'red'};
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    background-color: ${props.disabled ? 'gray' : props.background};
  `}
`;

const Button: React.FC<ButtonProps> = ({
  content,
  disabled = false,
  background = 'red',
  onClick,
}) => {
  const handleButtonClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <StyledButton
      onClick={handleButtonClick}
      disabled={disabled}
      background={background}
      data-testid={"Button"}
      content='asd'
    >
      {content}
    </StyledButton>
  );
};

export default Button;
