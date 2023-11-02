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
import { addExpenseTransactionThunk, addIncomeTransactionThunk } from 'redux/thunks';
import formatDate from 'service/helpers';
import { StyledForm } from './DashboardForm.styled';
// import {formatDate} from '../../service/helpers'

const DashboardForm = ({ categoriesList, category }) => {
  return (
    <div className="App">
      <FormFields categoriesList={categoriesList} category={category} />
    </div>
  );
}

const FormFields = ({categoriesList, category})=> {
  const { register, handleSubmit, control, setValue,reset } = useForm();
  const [date, setDate] = React.useState(new Date(formatDate(Date.now())));
  const dispatch = useDispatch();

  const onSubmit = data => {
    const dataToDispatch = {...data}
    dataToDispatch.date = formatDate(dataToDispatch.date)
    if (category === 'income') {
      dispatch(addIncomeTransactionThunk({dataToDispatch, category}))
    } else {
      dispatch(addExpenseTransactionThunk({dataToDispatch, category}))
    }
    reset()
  };

  const handleChange = dateChange => {
    setValue('date', dateChange, {
      shouldDirty: true,
    });

    setDate(dateChange);
  };

  return (
    <div className="container">
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="date"
          control={control}
          defaultValue={date}
          render={() => (
            <DatePicker
              selected={date}
              placeholderText="Select date"
              onChange={handleChange}
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
    </div>
  );
}



export default DashboardForm;