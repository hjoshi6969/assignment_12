import { RowProps } from './TableRow.types';
import styled, {css} from 'styled-components';
import Cell from '../Cell/Cell';

const StyledRow = styled.div<RowProps>`
  display: grid;
  grid-template-columns: repeat(${props => String(props.Items)}, auto);
  grid-gap: 10px;

`;

const TableRow = (props: RowProps) => {
    return (
        <StyledRow
          Items={props.Items}
          content={props.content}
        >
          {props.content}
        </StyledRow>
    );
};

export default TableRow;