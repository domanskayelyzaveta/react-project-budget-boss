import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userSetBalanceThunk } from 'redux/thunks';
import { toast } from 'react-toastify';
import {
  BalanceFormWrapper,
  StyledBalanceAmountInput,
  StyledConfirmButton,
} from './DashboardBalanceForm.styled';

const DashboardBalanceForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    if (!data.initialBalance || isNaN(data.initialBalance)) {
      toast.error('Please enter a valid initial balance.');
    } else if (+data.initialBalance > 0) {
      dispatch(userSetBalanceThunk({ newBalance: +data.initialBalance }));
    } else {
    }
  };

  return (
    <BalanceFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledBalanceAmountInput
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*\.?[0-9]*"
        {...register('initialBalance')}
        placeholder="00.00 UAH"
        autoComplete="off"
      />

      <StyledConfirmButton type="submit">Confirm</StyledConfirmButton>
    </BalanceFormWrapper>
  );
};

export default DashboardBalanceForm;
