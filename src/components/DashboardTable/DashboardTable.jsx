import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import IconWithButton from 'components/IconWithButton/IconWithButton';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteExpenseTransactionThunk,
  deleteIncomeTransactionThunk,
} from 'redux/thunks';
import sprite from '../../images/sprite.svg';
import { StyledBtn } from 'components/IconWithButton/IconWithButton.styled';

const styles = {
  tableContainer: {
    height: '438px',
    // overflow: 'auto',
    borderRadius: '24px',
    color: 'var(--text-color)',
    border: '2px solid var(--grey-6B)',
    scrollbarColor: 'var(--button)',
  },
  filler: {
    height: '100%', // Заполняющий элемент, который зальет пустое место цветом
    backgroundColor: 'var(--grey)', // Задаем цвет для заполнения
  },
  tableRow: {
    height: '38px',
    padding: '14px 22px',
    backgroundColor: 'var(--grey)',
    borderBottom: '2px solid var(--grey-6B)',
    // borderRight:'none',
    // borderLeft:'none',
    color: 'var(--white-DC)',
  },
  tableCell: {
    color: 'var(--text-color)',
  },
  tableHead: {
    background: 'var(--grey-6B)',
    // border: 'none',
    borderBottom: '2px solid var(--grey-6B)',
    position: 'sticky',
    top: 0,
  },
  tableBody: {
    maxHeight: '400px',
    overflowY: 'auto',
  },
};

const DashboardTable = ({ data, category }) => {
  const tableRef = useRef();
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
      style={styles.tableContainer}
      ref={tableRef}
    >
      <Table aria-label="My Table">
        <TableHead style={styles.tableHead}>
          <TableRow>
            <TableCell
              style={{ width: '98px', ...styles.tableCell }}
              align="left"
            >
              DATE
            </TableCell>
            <TableCell
              style={{ width: '188px', ...styles.tableCell }}
              align="left"
            >
              DESCRIPTION
            </TableCell>
            <TableCell
              style={{ width: '120px', ...styles.tableCell }}
              align="center"
            >
              CATEGORY
            </TableCell>
            <TableCell
              style={{ width: '120px', ...styles.tableCell }}
              align="center"
            >
              SUM
            </TableCell>
            <TableCell
              style={{ width: '100px', ...styles.tableCell }}
              align="left"
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(item => (
            <TableRow key={item._id} style={styles.tableRow}>
              <TableCell
                style={{ width: '98px', ...styles.tableCell }}
                align="left"
              >
                {item.date}
              </TableCell>
              <TableCell
                style={{ width: '188px', ...styles.tableCell }}
                align="left"
              >
                {item.description}
              </TableCell>
              <TableCell
                style={{ width: '120px', ...styles.tableCell }}
                align="center"
              >
                {item.category}
              </TableCell>

              <TableCell
                style={{
                  width: '120px',
                  ...styles.tableCell,
                  color: category === 'income' ? '#60C470' : '#FE4566',
                }}
                align="center"
              >
                {category === 'income' ? `${item.amount.toFixed(2)} UAH` : `- ${item.amount.toFixed(2)} UAH`}
              </TableCell>
              <TableCell
                style={{ width: '100px', ...styles.tableCell }}
                align="left"
              >
                <StyledBtn
                  onClick={() => {
                    handleDeleteTransaction(item._id);
                  }}
                >
                  <svg width="16" height="16">
                    <use href={`${sprite}#icon-trash-bin`} />
                  </svg>
                </StyledBtn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={styles.filler}></div>
    </TableContainer>
    // <TableContainer
    //   component={Paper}
    //   style={{
    //     borderRadius: '12px',
    //     maxHeight:'460px',
    //   }}
    // >
    //   <StyledTable
    //     sx={{
    //       '&:last-child td, &:last-child th': { border: 0 },
    //     }}

    //     size="small"
    //     aria-label="a dense table"
    //     variant="plain"
    //   >
    //     <TableHead
    //       sx={{
    //         '& th': {
    //           color: 'var(--text-color)',
    //           backgroundColor: 'var(--grey-6B)',
    //           borderRadius: '8px 8px 0px 0px',
    //         },
    //       }}
    //     >
    //       <StyledTableRow>
    // <TableCell>DATE</TableCell>
    // <TableCell style={{ height: '38px' }} align="left">DESCRIPTION</TableCell>
    // <TableCell align="left">CATEGORY</TableCell>
    // <TableCell align="left">SUM</TableCell>
    //       </StyledTableRow>
    //     </TableHead>
    //     <TableBody>
    //       {data?.map(row => (
    //         <StyledTableRow
    //           key={row._id}
    //           sx={{
    //             '&:last-child td, &:last-child th, td': {
    //               border: 0,
    //               color: 'var(--white-DC)',
    //               padding: '14px 22px',
    //             },
    //           }}
    //         >
    //           <TableCell>{row.date}</TableCell>
    //           <StyledTableCell align="left">{row.description}</StyledTableCell>
    //           <StyledTableCell align="left">{row.category}</StyledTableCell>
    //           <TableCell align="left">
    //             {row.amount}
    // <button onClick={() => handleDeleteTransaction(row._id)}>
    //   DELETE
    // </button>
    //           </TableCell>
    //         </StyledTableRow>
    //       ))}
    //     </TableBody>
    //   </StyledTable>
    // </TableContainer>
  );
};

export default DashboardTable;
