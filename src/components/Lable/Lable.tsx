import { LableProps } from './Lable.types';
import styled, {css} from 'styled-components';

const StyledLable = styled.div<LableProps>`
  font-size  : 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
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
`;

const Lable = (props: LableProps) => {
    return (
        <StyledLable
          name={props.name}
          job={props.job}
          PC={props.PC}
          Mobile={props.Mobile}
        >
          {props.name}
          {!props.Mobile ? <span>-</span> : null}
          <span>{props.job}</span>
        </StyledLable>
    );
};

export default Lable;