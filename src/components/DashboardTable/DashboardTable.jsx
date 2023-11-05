import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { StyledBtn } from 'components/IconWithButton/IconWithButton.styled';
import Modal from 'components/Modal/Modal';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteExpenseTransactionThunk,
  deleteIncomeTransactionThunk,
} from 'redux/thunks';
import sprite from '../../images/sprite.svg';

const styles = {
  tableContainer: {
    width: '746px',
    height: '438px',
    // overflow: 'auto',
    borderRadius: '24px',
    color: 'var(--text-color)',
    border: '2px solid var(--grey-6B)',
    scrollbarColor: 'var(--button)',
    backgroundColor: 'rgba(56, 56, 71, 0.29)',
    // background: 'linear-gradient(116deg, #383847 23.54%, rgba(56, 56, 71, 0.29) 107.94%)',
  },

  tableRow: {
    height: '38px',
    padding: '14px 22px',
    backgroundColor: 'rgba(56, 56, 71, 0.29)',
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
  const [id, setId] = useState(null);

  const tableRef = useRef();
  const dispatch = useDispatch();
  const handleDeleteTransaction = id => {
    if (category === 'income') {
      dispatch(deleteIncomeTransactionThunk(id));
    } else {
      dispatch(deleteExpenseTransactionThunk(id));
    }
    setIsModalOpen(!isModalOpen);
    setId(null);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
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
              style={{ width: '32px', ...styles.tableCell }}
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
                {category === 'income'
                  ? `${item.amount.toFixed(2)} UAH`
                  : `- ${item.amount.toFixed(2)} UAH`}
              </TableCell>
              <TableCell
                style={{ width: '32px', ...styles.tableCell }}
                align="left"
              >
                <StyledBtn
                  onClick={() => {
                    handleModalOpen();
                    setId(item._id);
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
      {isModalOpen && (
        <Modal
          children={<p>Are you sure?</p>}
          incomeEvent={handleDeleteTransaction}
          onCloseModal={handleModalOpen}
          id={id}
        ></Modal>
      )}
    </TableContainer>
  );
};

export default DashboardTable;
