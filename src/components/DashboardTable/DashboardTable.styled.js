import {
  Table,
  TableCell,
  TableRow,
  // TableContainer
} from '@mui/material';
import styled from 'styled-components';

// export const StyledTableContainer = styled(TableContainer)`
//   width: 746px;
// `;

export const StyledTable = styled(Table)`
  // width: 746px;
  // height: 438px;
  border-radius: 24px;
  background-color: var(--grey-6B);
  color: var(--text-color);
  overflow-y: auto;
`;

export const StyledTableRow = styled(TableRow)`
  width: 100%;
  /* height: 38px; */
  color: var(--white-DC);
  border: 2px solid var(--grey-6B);
  background-color: var(--grey);
`;

export const StyledTableCell = styled(TableCell)`
  color: var(--text-color);
`;
