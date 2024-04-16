import { LableProps } from './Lable.types';
import styled, {css} from 'styled-components';

const StyledLable = styled.div<LableProps>`
  font-size  : 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  background-color: ${(props) => props.background};
  ${(props) =>
    props.PC &&
    css`
        border-bottom: 2px grey solid;
        padding: 10px 5px;
    `}

    ${(props) =>
    props.Mobile &&
    css`
        display: flex;
        flex-direction: column;
        span{
            font-size: smaller;
            color: grey;
        }
    `}

    ${(props) =>
    props.disabled &&
    css`
        filter: grayscale(100%);
        cursor: not-allowed;
    `}
`;

const Lable = (props: LableProps) => {
    return (
        <StyledLable
          name={props.name}
          job={props.job}
          PC={props.PC}
          Mobile={props.Mobile}
          disabled={props.disabled}
          background={props.background}
        >
          {props.name}
          {!props.Mobile ? <span>-</span> : null}
          <span>{props.job}</span>
        </StyledLable>
    );
};

export default Lable;