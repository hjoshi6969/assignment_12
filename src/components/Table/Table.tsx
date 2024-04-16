import { TableProps } from './Table.types';
import styled, {css} from 'styled-components';
import Cell from '../Cell/Cell';
import TableRow from '../TableRow/TableRow';
import Footer from '../Footer/Footer'

const StyledTable = styled.div<TableProps>`
  display: grid;
  ${(props) =>
    props.disabled &&
    css`
        filter: grayscale(100%);
        cursor: not-allowed;
    `}
`;

const Table = (props: TableProps) => {
    return (
        <StyledTable
          Items={props.Items}
          disabled={props.disabled}
        >
          <TableRow Items={1} content={
            <Cell content='Front End Skills' Header={true} background={props.background}></Cell>
          }></TableRow>

          <TableRow Items={props.Items} content={
            <>
                <Cell 
                  content='HTML'       
                  background={props.background}></Cell>
                <Cell content='CSS' CSS={true} background={props.background}></Cell>
                <Cell content='JS' background={props.background}></Cell>
                <Cell content='React' background={props.background}></Cell>
                <Cell content='Ruby on Rails' background={props.background}></Cell>
            </>
          }>
           
          </TableRow>
          <Footer></Footer>
        </StyledTable>
    );
};

export default Table;