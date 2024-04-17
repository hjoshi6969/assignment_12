import { FormProps } from './Form.types';
import styled, { css } from 'styled-components';
import Button from '../Button/Button';
import { useState } from 'react';
import { isValid } from './Form.lib';

const StyledForm = styled.form<FormProps>`
    background-color: ${(props) => props.background};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    ${(props) =>
    props.disabled &&
    css`
        filter: grayscale(100%);
        cursor: not-allowed;
    `}
    input{
        margin-bottom: 10px;
        width: 300px;
        height: 50px;
        font-size: 24px;
        padding:5px;
        border: 1px solid ${(props) => (props.valid ? 'initial' : 'red')};
    }
`;

const Card = (props: FormProps) => {
  const [valid, setValid] = useState(Boolean);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onConnect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const email = document.querySelector('#email').value;
    setValid(isValid(email));
    console.log(valid);
  }

  return (
    <StyledForm
      disabled={props.disabled}
      clicked={props.clicked}
      background={props.background}
      className='form'
      valid={valid}
    >
      <input 
        type="email" 
        name="email" 
        id="email" 
        value={value} 
        onChange={handleChange}
      />
      <button onClick={onConnect}>Connect</button>
    </StyledForm>
  );
};

export default Card;
