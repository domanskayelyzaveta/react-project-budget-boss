import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteExpenseTransactionThunk, deleteIncomeTransactionThunk } from 'redux/thunks';
import { StyledTable } from './DashboardTable.styled';

const DashboardTable = ({ data, category }) => {
  const dispatch = useDispatch();
  const handleDeleteTransaction = id => {
    if (category === 'income') {
      dispatch(deleteIncomeTransactionThunk(id));
    } else {
      dispatch(deleteExpenseTransactionThunk(id));
    }
  };

  return (
    <TableContainer component={Paper}>
      <StyledTable
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        size="small"
        aria-label="a dense table"
        variant="plain"
      >
        <TableHead>
          <TableRow>
            <TableCell>DATE</TableCell>
            <TableCell align="left">DESCRIPTION</TableCell>
            <TableCell align="left">CATEGORY</TableCell>
            <TableCell align="left">SUM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(row => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">
                {row.amount}
                <button onClick={() => handleDeleteTransaction(row._id)}>
                  DELETE
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default DashboardTable;
