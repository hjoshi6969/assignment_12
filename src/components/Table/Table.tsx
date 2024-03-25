import { TableProps } from './Table.types';
import styled, {css} from 'styled-components';
import Cell from '../Cell/Cell';
import TableRow from '../TableRow/TableRow';

const StyledTable = styled.div<TableProps>`
  display: grid;

`;

const Table = (props: TableProps) => {
    return (
        <StyledTable
          Items={props.Items}
        >
          <TableRow Items={1} content={<Cell content='Front End Skills' Header={true}></Cell>}></TableRow>
          <TableRow Items={props.Items} content={
            <>
                <Cell content='HTML'></Cell>
                <Cell content='CSS' CSS={true}></Cell>
                <Cell content='JS'></Cell>
                <Cell content='React'></Cell>
                <Cell content='Ruby on Rails'></Cell>
            </>
          }></TableRow>

        </StyledTable>
    );
};

export default Table;