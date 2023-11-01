import StyledDatepicker from 'components/DatePicker/StyledDatepicker';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTransactionThunk } from 'redux/thunks';
import { StyledForm, StyledWrapper } from './DashboardForm.styled';
import DatePicker from 'react-datepicker';

const DashboardForm = ({ categoriesList, category }) => {
  // const [date, setDate] = useState(new Date(Date.now()));
  const [startDate, setStartDate] = useState(null);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, control, setValue } = useForm();
  const onSubmit = data => {
    console.log(data);
    dispatch(addTransactionThunk({ data, category }));
    reset();
  };

  // const onChange = dateChange => {
  //   setValue('date', dateChange, {
  //     shouldDirty: true,
  //   });
  //   setDate(dateChange);
  // };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)} id="external-form">
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <StyledDatepicker
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
          />
        )}
      />
        <input {...register('description')} placeholder="Описание" />

        <select {...register('category')}>
          <option value="-">Category</option>
          {categoriesList?.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input type="number" {...register('amount')} placeholder="Сумма" />

        <button type="submit">INPUT</button>
        <button type="button">CLEAR</button>

      </StyledForm>
    </StyledWrapper>
  );
};

export default DashboardForm;
