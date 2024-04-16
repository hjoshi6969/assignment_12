import { RowProps } from './TableHeading.types';
import styled, {css} from 'styled-components';
import Cell from '../Cell/Cell';

const StyledRowHeading = styled.div<RowProps>`
  display: grid;
  grid-template-columns: repeat(${props => String(props.Items)}, auto);
  grid-gap: 10px;
  background-color: ${(props) => props.background};
  ${(props) =>
    props.disabled &&
    css`
        filter: grayscale(100%);
        cursor: not-allowed;
    `}
`;

const TableRow = (props: RowProps) => {
    return (
        <StyledRowHeading
          Items={props.Items}
          content={props.content}
          disabled={props.disabled}
          background={props.background}
        >
          {props.content}
        </StyledRowHeading>
    );
};

export default TableRow;