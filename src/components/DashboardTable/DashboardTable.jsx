import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  deleteExpenseTransactionThunk,
  deleteIncomeTransactionThunk,
} from 'redux/thunks';
import {
  StyledTable,
  StyledTableCell,
  StyledTableRow,
} from './DashboardTable.styled';

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
    <TableContainer
      component={Paper}
      style={{
        borderRadius: '12px',
      }}
    >
      <StyledTable
        sx={{
          '&:last-child td, &:last-child th': { border: 0 },
        }}
        size="small"
        aria-label="a dense table"
        variant="plain"
      >
        <TableHead
          sx={{
            '& th': {
              color: 'var(--text-color)',
              backgroundColor: 'var(--grey-6B)',
              borderRadius: '8px 8px 0px 0px',
            },
          }}
        >
          <StyledTableRow>
            <TableCell>DATE</TableCell>
            <TableCell align="left">DESCRIPTION</TableCell>
            <TableCell align="left">CATEGORY</TableCell>
            <TableCell align="left">SUM</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data?.map(row => (
            <StyledTableRow
              key={row._id}
              sx={{
                '&:last-child td, &:last-child th, td': {
                  border: 0,
                  color: 'var(--white-DC)',
                  padding: '0 22px',
                  height: '38px',
                },
              }}
            >
              <TableCell>{row.date}</TableCell>
              <StyledTableCell align="left">{row.description}</StyledTableCell>
              <StyledTableCell align="left">{row.category}</StyledTableCell>
              <TableCell align="left">
                {row.amount}
                <button onClick={() => handleDeleteTransaction(row._id)}>
                  DELETE
                </button>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default DashboardTable;
