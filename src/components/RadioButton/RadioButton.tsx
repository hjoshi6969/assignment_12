import React from 'react';
import styled from 'styled-components';

export interface RadioButtonProps {
  label: string;
  checked?: boolean;
  onClick?: (checked: boolean) => void;
}

// Styled components for the radio button
const RadioContainer = styled.label<{ checked?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioLabel = styled.span`
  font-size: 16px;
`;

// RadioButton component
const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  checked = false,
  onClick,
}) => {
  // Function to handle radio button change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    if (onClick) {
      // Call onClick callback with the new checked state
      onClick(isChecked);
    }
  };

  return (
    <RadioContainer checked={checked}>
      {/* Radio input */}
      <RadioInput
        type="radio"
        checked={checked}
        onChange={handleChange}
      />
      {/* Radio label */}
      <RadioLabel>{label}</RadioLabel>
    </RadioContainer>
  );
};

export default RadioButton;
