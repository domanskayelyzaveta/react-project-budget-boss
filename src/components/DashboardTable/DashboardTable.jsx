import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { StyledTable } from './DashboardTable.styled';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];
const DashboardTable = () => {
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
            <TableCell>Date</TableCell>
            <TableCell align="left">DESCRIPTION</TableCell>
            <TableCell align="left">CATEGORY</TableCell>
            <TableCell align="left">SUM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default DashboardTable;
