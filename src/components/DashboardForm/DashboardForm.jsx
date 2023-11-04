// import StyledDatepicker from 'components/DatePicker/StyledDatepicker';
// import { useState } from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { addTransactionThunk } from 'redux/thunks';
// import { StyledForm, StyledWrapper } from './DashboardForm.styled';
// import DatePicker from 'react-datepicker';

// const DashboardForm = ({ categoriesList, category }) => {
//   const [date, setDate] = useState(new Date(Date.now()));
//   const dispatch = useDispatch();

//   const { register, handleSubmit, reset, control, setValue } = useForm();
//   const onSubmit = data => {
//     console.log(data);
//     dispatch(addTransactionThunk({ data, category }));
//     reset();
//   };

//   const handleChange = ({dateChange}) => {
//     setValue("dateOfBirth", dateChange, {
//       shouldDirty: true
//     });
//     setDate(dateChange);
//   };

//   return (
//     <div className="container">
//       <StyledForm onSubmit={handleSubmit(onSubmit)}>
//         <Controller
//           name="dateOfBirth"
//           control={control}
//           defaultValue={date}
//           render={() => (
//             <DatePicker
//               selected={date}
//               placeholderText="Select date"
//               onChange={handleChange}
//             />
//           )}
//         />
//         <input {...register('description')} placeholder="Описание" />

//         <select {...register('category')}>
//           <option value="-">Category</option>
//           {categoriesList?.map(category => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>

//         <input type="number" {...register('amount')} placeholder="Сумма" />

//         <button type="submit">INPUT</button>
//         <button type="button">CLEAR</button>
//       </StyledForm>
//     </div>
//   );
// };

// export default DashboardForm;

import React from 'react';

import DatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import {
  addExpenseTransactionThunk,
  addIncomeTransactionThunk,
} from 'redux/thunks';
import formatDate from 'service/helpers';
import {
  CalcWrapper,
  CustomSelect,
  StyledButtonsWrapper,
  StyledCategoryInput,
  StyledClearButton,
  StyledDescrInput,
  StyledForm,
  StyledInputButton,
  StyledInputWrapper,
  StyledOption,
  StyledSumInput,
  SvgCalc,
} from './DashboardForm.styled';
import StyledDatepicker from 'components/DatePicker/StyledDatepicker';
// import {formatDate} from '../../service/helpers'
import Select from 'react-select';
import customStyles from './DashboardFormStyle';
import sprite from '../../images/sprite.svg';

// const DashboardForm = ({ categoriesList, category }) => {
//   return <FormFields categoriesList={categoriesList} category={category} />;
// };
import { toast } from 'react-toastify';

const DashboardForm = ({ categoriesList, category }) => {
  const { register, handleSubmit, control, setValue, reset } = useForm();
  const [date, setDate] = React.useState(new Date(formatDate(Date.now())));
  const dispatch = useDispatch();

  const onSubmit = data => {
    const dataToDispatch = { ...data };
    dataToDispatch.date = formatDate(dataToDispatch.date);

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
      // console.log(category);

      dispatch(addIncomeTransactionThunk({ dataToDispatch, category }))
        .then(() => {
          toast.success('Income transaction added successfully');
        })
        .catch(error => {
          console.error('Error adding income transaction:', error);
          toast.error('Error adding income transaction: ' + error.message);
        });
    } else {
      dispatch(addExpenseTransactionThunk({ dataToDispatch, category }))
        .then(() => {
          toast.success('Expense transaction added successfully');
        })
        .catch(error => {
          console.error('Error adding expense transaction:', error);
          toast.error('Error adding expense transaction: ' + error.message);
        });
    }
    // category === 'income'
    //   ? dispatch(addIncomeTransactionThunk({ dataToDispatch, category }))
    //   : dispatch(addExpenseTransactionThunk({ dataToDispatch, category }));
    reset();
    setDate(null);
  };

  const handleChange = dateChange => {
    setValue('date', dateChange, {
      shouldDirty: true,
    });

    setDate(dateChange);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="date"
          control={control}
          defaultValue={date}
          render={() => (
            <StyledDatepicker
              selected={date}
              placeholderText="Select date"
              onChange={handleChange}
            />
          )}
        />

        <StyledInputWrapper>
          <StyledDescrInput
            {...register('description')}
            placeholder="Description"
            autoComplete="off"
          />

          {/* <StyledCategoryInput {...register('category')}>
            <option value="-">Category</option>
            {categoriesList?.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </StyledCategoryInput> */}
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
          <StyledInputButton type="submit">INPUT</StyledInputButton>
          <StyledClearButton type="button">CLEAR</StyledClearButton>
        </StyledButtonsWrapper>
      </StyledForm>
    </div>
  );
};

export default DashboardForm;
