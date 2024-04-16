import React from 'react';
import { RadioButtonProps } from './RadioButton.types';
import styled, { css } from 'styled-components';
import Lable from '../Lable/Lable';

const StyledRadioWrapper = styled.label<RadioButtonProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

const RadioButton: React.FC<RadioButtonProps> = ({ disabled, background, label }) => {
  return (
    <StyledRadioWrapper 
      disabled={disabled}
      background={background}
      label='radio'
      className='x'
    >
      <input
        type="radio"
        disabled={disabled}
        data-testid="Radio"
      />

      {label}
    </StyledRadioWrapper>
  );
};

export default RadioButton;
