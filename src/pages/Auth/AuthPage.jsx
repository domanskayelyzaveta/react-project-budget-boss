import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk, registerThunk } from 'redux/thunks';
import { useForm } from 'react-hook-form';
import GoogleAuthButton from 'components/GoogleAuthBtn/GoogleAuthBtn';

const Auth = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const submit = e.nativeEvent.submitter.name;

    if (data) {
      submit === 'Log in'
        ? dispatch(loginThunk(data))
        : dispatch(registerThunk(data))
            .unwrap()
            .then(() => {
              dispatch(loginThunk(data));
              form.reset();
            });
    }
  };

  return (
    <div>
      AuthForm
      <GoogleAuthButton />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          {...register('email', {
            required: { value: true, message: 'This field is required' },
            minLength: { value: 3, message: 'Minimum 3 characters' },
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: { value: true, message: 'This field is required' },
            minLength: { value: 8, message: 'Minimum 8 characters' },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button name="Log in" type="submit">
          Log in
        </button>
        <button name="Registration" type="submit">
          Registration
        </button>
      </form>
    </div>
  );
};

export default Auth;
