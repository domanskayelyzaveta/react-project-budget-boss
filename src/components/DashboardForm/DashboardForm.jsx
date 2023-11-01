// import StyledDatepicker from 'components/DatePicker/StyledDatepicker';
// import { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useSelector } from 'react-redux';
// import { fetchExpenseCategories, fetchIncomeCategories } from 'service/Api';
// import { StyledWrapper } from './DashboardForm.styled';

// const DashboardForm = () => {
//   // const token = useSelector(state => state.user.accessToken);
//   // useEffect(() => {
//   //   const res = fetchIncomeCategories(token);
//   //   const res2=fetchExpenseCategories(token)
//   //   // console.log(res)
//   // }, [token]);
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);
//   return (
//     <StyledWrapper>
//       <StyledDatepicker />
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input {...register('description')} />
//         <select {...register('category')}>
//           <option value="-">Category</option>
//           <option value="products">Products</option>
//           <option value="car">Car</option>
//           <option value="other">Other</option>
//         </select>
//         <input {...register('amount')} />
//         <button type="submit">INPUT</button>
//         <button type="button">CLEAR</button>
//       </form>
//     </StyledWrapper>
//   );
// };

// export default DashboardForm;
