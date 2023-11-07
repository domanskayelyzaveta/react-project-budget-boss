import { useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import StyledDatepicker from 'components/DatePicker/StyledDatepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addExpenseTransactionThunk,
  addIncomeTransactionThunk,
} from 'redux/thunks';

import {
  CalcWrapper,
  StyledButtonsWrapper,
  StyledClearButton,
  StyledDescrInput,
  StyledError,
  StyledForm,
  StyledFormWrapper,
  StyledInputButton,
  StyledInputWrapper,
  StyledSelectError,
  StyledSumInput,
  SvgCalc,
  Wrapper,
} from './DashboardForm.styled';

import Select from 'react-select';
import sprite from '../../images/sprite.svg';
import customStyles from './DashboardFormStyle';

import { toast } from 'react-toastify';
import { setSelectedDate_ } from 'redux/userReducer';
import Modal from '../Modal/Modal';
import { selectDate } from 'redux/selectors';
import { format } from 'date-fns';

const DashboardForm = ({ categoriesList, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const selectedDate = useSelector(selectDate);
  const dispatch = useDispatch();

  const onSubmit = data => {
    const dataToDispatch = {
      ...data,
      date: format(new Date(selectedDate), 'yyyy-MM-dd'),
    };

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
      dispatch(addIncomeTransactionThunk({ dataToDispatch, category }))
        .unwrap()
        .then(() => {
          toast.success('Income transaction added successfully');
        })
        .catch(error => {
          toast.error('Error adding income transaction: ' + error.message);
        });
    } else {
      dispatch(addExpenseTransactionThunk({ dataToDispatch, category }))
        .unwrap()
        .then(() => {
          toast.success('Expense transaction added successfully');
        })
        .catch(error => {
          toast.error('Error adding expense transaction: ' + error.message);
        });
    }

    reset(defaultValues);
  };

  const defaultValues = {
    description: null,
    category: '',
    amount: null,
  };

  const handleChange = dateChange => {
    setValue('date', dateChange, {
      shouldDirty: true,
    });

    dispatch(setSelectedDate_(dateChange));
  };

  const handelClearForm = () => {
    reset(defaultValues);
    // setValue('category', null);
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
          <Wrapper>
            <StyledDescrInput
              {...register('description', {
                required: { value: true, message: 'This field is required' },
                minLength: { value: 1, message: 'Min length 1 character' },
                maxLength: { value: 300, message: 'Max length 300 characters' },
              })}
              placeholder="Description"
              autoComplete="off"
            />
            {errors.description && (
              <StyledError>{errors.description.message}</StyledError>
            )}
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...register('category', {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                  })}
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
            {errors.category && (
              <StyledSelectError>{errors.category.message}</StyledSelectError>
            )}
          </Wrapper>
          <CalcWrapper>
            <StyledSumInput
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*\.?[0-9]*"
              {...register('amount', {
                required: { value: true, message: 'This field is required' },
                min: { value: 1, message: 'Min value 1 and more' },
                max: { value: 1000000000, message: 'Max value is 1000000000' },
              })}
              placeholder="0,00"
              autoComplete="off"
            />
            <SvgCalc width="20" height="20">
              <use href={`${sprite}#icon-calculator`} />
            </SvgCalc>
            {errors.amount && (
              <StyledError>{errors.amount.message}</StyledError>
            )}
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
