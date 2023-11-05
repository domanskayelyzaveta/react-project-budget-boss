import { useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import StyledDatepicker from 'components/DatePicker/StyledDatepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addExpenseTransactionThunk,
  addIncomeTransactionThunk,
} from 'redux/thunks';
import formatDate from 'service/helpers';
import {
  CalcWrapper,
  StyledButtonsWrapper,
  StyledClearButton,
  StyledDescrInput,
  StyledForm,
  StyledFormWrapper,
  StyledInputButton,
  StyledInputWrapper,
  StyledSumInput,
  SvgCalc,
} from './DashboardForm.styled';

import Select from 'react-select';
import sprite from '../../images/sprite.svg';
import customStyles from './DashboardFormStyle';

import { toast } from 'react-toastify';
import { setSelectedDate_ } from 'redux/userReducer';
import Modal from '../Modal/Modal';
import MobilDashboardBalanceForm from 'components/MobilDashboardBalanceForm/MobilDashboardBalanceForm';

const DashboardForm = ({ categoriesList, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { register, handleSubmit, control, setValue, reset } = useForm();
  const selectedDate = useSelector(state=> state.user.selectedDate)
  const dispatch = useDispatch();

  const onSubmit = data => {
    const dataToDispatch = { ...data, date:formatDate(selectedDate) };

    //*DESCRIPTION
    if (!dataToDispatch.description) {
      toast.error('Please enter a description before submitting.');
      return;
    }
    //*AMOUNT
    if (!dataToDispatch.amount || dataToDispatch.amount === 0) {
      toast.error('Please enter a valid amount before submitting.');
      return;
    }
    dataToDispatch.amount = Number(dataToDispatch.amount);

    //*CATEGORY
    if (!dataToDispatch.category || !dataToDispatch.category.value) {
      toast.error('Please select a category before submitting.');
      return;
    }
    dataToDispatch.category = dataToDispatch.category.value;

    //*====TOASTIFY
    if (category === 'income') {

      dispatch(addIncomeTransactionThunk({ dataToDispatch, category })).unwrap()
        .then(() => {
          toast.success('Income transaction added successfully');
        })
        .catch(error => {
          console.error('Error adding income transaction:', error);
          toast.error('Error adding income transaction: ' + error.message);
        });
    } else {
      dispatch(addExpenseTransactionThunk({ dataToDispatch, category })).unwrap()
        .then(() => {
          toast.success('Expense transaction added successfully');
        })
        .catch(error => {
          console.error('Error adding expense transaction:', error);
          toast.error('Error adding expense transaction: ' + error.message);
        });
    }

    reset();
  };

  const handleChange = dateChange => {
    setValue('date', dateChange, {
      shouldDirty: true,
    });

    dispatch(setSelectedDate_(dateChange))
  };

  const handelClearForm = () => {
    reset();
  };

  return (
    <StyledFormWrapper>
      <StyledDatepicker
              value={selectedDate}
              placeholderText="Select date"
              onClick={handleChange}
            />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>

        <StyledInputWrapper>
          <StyledDescrInput
            {...register('description')}
            placeholder="Description"
            autoComplete="off"
          />

          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...register('category')}
                placeholder="Category"
                styles={customStyles}
                {...field}
                options={categoriesList?.map((category, index) => ({
                  value: category,
                  label: category,
                }))}
              />
            )}
          />
          <CalcWrapper>
            <StyledSumInput
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*\.?[0-9]*"
              {...register('amount')}
              placeholder="0,00"
              autoComplete="off"
            />
            <SvgCalc width="20" height="20">
              <use href={`${sprite}#icon-calculator`} />
            </SvgCalc>
          </CalcWrapper>
        </StyledInputWrapper>
        <StyledButtonsWrapper>
          <StyledInputButton type="submit">ADD TRANSACTION</StyledInputButton>
          <StyledClearButton type="button" onClick={handleModalOpen}>
            CLEAR
          </StyledClearButton>
        </StyledButtonsWrapper>
      </StyledForm>
      {isModalOpen && (
        <Modal
          children={<p>Are you sure?</p>}
          incomeEvent={handelClearForm}
          onCloseModal={handleModalOpen}
        ></Modal>
      )}
      
    </StyledFormWrapper>
  );
};

export default DashboardForm;
