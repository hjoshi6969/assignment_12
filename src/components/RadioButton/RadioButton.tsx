import React from 'react';
import styled, { css } from 'styled-components';

interface RadioButtonProps {
  label: string;
  disabled?: boolean;
  background?: string;
}

const RadioContainer = styled.label<{ background?: string }>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const RadioInput = styled.input<{ background?: string }>`
  appearance: none;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 50%;
  border: 2px solid #ccc;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${(props) => props.background || 'red'};
    border-color: ${(props) => props.background || 'red'};
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  disabled = false,
  background = 'red',
}) => {
  return (
    <RadioContainer background={background}>
      <RadioInput
        type="radio"
        disabled={disabled}
        background={background}
        data-testid="Radio"
      />
      {label}
    </RadioContainer>
  );
};

export default RadioButton;
