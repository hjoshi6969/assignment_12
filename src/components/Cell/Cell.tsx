import { CellProps } from './Cell.types';
import styled, {css} from 'styled-components';

const StyledCell = styled.div<CellProps>`

    
    background-color: #f55951;
    color: white;
    border-radius: 4px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    div {
        padding: 16px 32px;
    }
    display: flex;
    justify-content: center;

    ${(props) =>
    props.Header &&
    css`
        background-color: transparent;
        color: #4b4b4b;
        border: none;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 90px;
        font-size: 32px;
        font-weight: bold;
        div {
        }
        }
    `}

    ${(props) =>
    props.CSS &&
    css`
        color: black;
        width:60px;
        div{
            width: 90px;
        }
    }
    `}

    ${(props) =>
    props.disabled &&
    css`
        filter: grayscale(100%);
        cursor: not-allowed;
    `}
`;

const Cell = (props: CellProps) => {
    return (
        <StyledCell 
            content={props.content}
            CSS={props.CSS}
            Header={props.Header}
            disabled={props.disabled}
        ><div>{props.content}</div></StyledCell>
    );
};

export default Cell;