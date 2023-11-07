import { Controller, useForm } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addExpenseTransactionThunk,
  addIncomeTransactionThunk,
} from 'redux/thunks';

import Select from 'react-select';
import sprite from '../../images/sprite.svg';
import customStyles from '../DashboardForm/DashboardFormStyle';

import { toast } from 'react-toastify';

import {
  StyledClearButton,
  StyledInputButton,
  SvgCalc,
} from 'components/DashboardForm/DashboardForm.styled';
import {
  CalcWrapper,
  Div,
  StyledButtonsWrapper,
  StyledDescrInput,
  StyledErrorMobile,
  StyledErrorSelectMobile,
  StyledErrorSumMobile,
  StyledForm,
  StyledFormMobileWrapper,
  StyledSumInput,
  StyledTextInputWrapper,
} from './DahboardFormMobile.styled';
import { selectDate } from 'redux/selectors';
import { format } from 'date-fns';

const DashboardFormMobile = ({ category, onCloseModal }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const selectedDate = useSelector(selectDate);
  const incomeCategoriesList = useSelector(
    state => state.categories.incomeCategories
  );
  const expenseCategoriesList = useSelector(
    state => state.categories.expenseCategories
  );
  let categoriesList;
  category === 'income'
    ? (categoriesList = incomeCategoriesList)
    : (categoriesList = expenseCategoriesList);
  const dispatch = useDispatch();

  const defaultValues = {
    description: null,
    category: '',
    amount: null,
  };

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
        })
        .finally(() => onCloseModal(category));
    } else {
      dispatch(addExpenseTransactionThunk({ dataToDispatch, category }))
        .unwrap()
        .then(() => {
          toast.success('Expense transaction added successfully');
        })
        .catch(error => {
          toast.error('Error adding expense transaction: ' + error.message);
        })
        .finally(() => onCloseModal(category));
    }

    reset(defaultValues);
  };

  const handelClearForm = () => {
    reset(defaultValues);
  };

  return (
    <StyledFormMobileWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTextInputWrapper>
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
            <StyledErrorMobile>{errors.description.message}</StyledErrorMobile>
          )}
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...register('category', {
                  required: { value: true, message: 'This field is required' },
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
            <StyledErrorSelectMobile>
              {errors.category.message}
            </StyledErrorSelectMobile>
          )}
        </StyledTextInputWrapper>

        <CalcWrapper>
          <StyledSumInput
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*\.?[0-9]*"
            {...register('amount', {
              required: { value: true, message: 'This field is required' },
              min: { value: 1, message: 'Min value must be 1 and more' },
              max: { value: 1000000000, message: 'Max value is 1000000000' },
            })}
            placeholder="00.00 UAH"
            autoComplete="off"
          />
          {errors.amount && (
            <StyledErrorSumMobile>{errors.amount.message}</StyledErrorSumMobile>
          )}
          <Div>
            <SvgCalc width="20" height="20">
              <use href={`${sprite}#icon-calculator`} />
            </SvgCalc>
          </Div>
        </CalcWrapper>

        <StyledButtonsWrapper>
          <StyledInputButton type="submit">Input</StyledInputButton>
          <StyledClearButton type="button" onClick={handelClearForm}>
            CLEAR
          </StyledClearButton>
        </StyledButtonsWrapper>
      </StyledForm>
      {/* {isModalOpen && (
        <Modal
          children={<p>Are you sure?</p>}
          incomeEvent={handelClearForm}
          onCloseModal={handleModalOpen}
        ></Modal>
      )} */}
    </StyledFormMobileWrapper>
  );
};

export default DashboardFormMobile;
