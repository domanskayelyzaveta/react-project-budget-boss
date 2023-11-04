import React from 'react';
import {
  Form,
  FormWrapper,
  InputEmail,
  InputPassword,
  Label,
  LogInBtn,
  RegisterBtn,
  RequiredP,
  Span,
} from './AuthForm.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk, registerThunk } from 'redux/thunks';
import GoogleAuthButton from 'components/GoogleAuthBtn/GoogleAuthBtn';
import { toast } from 'react-toastify';

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const submit = e.nativeEvent.submitter.name;

    if (data) {
      submit === 'Log in'
        ? dispatch(loginThunk(data))
            .then(() => {
              toast.success('Login successful');
            })
            .catch(error => {
              toast.error('Registration failed: ' + error.message);
            })
        : dispatch(registerThunk(data))
            .then(() => {
              dispatch(loginThunk(data));
              form.reset();
              toast.success('Registration successful');
            })
            .catch(error => {
              toast.error('Registration failed: ' + error.message);
            });
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <GoogleAuthButton />
        <div>
          <Label>{errors.email && <Span>*</Span>}Email:</Label>
        </div>
        <InputEmail
          type="email"
          placeholder="Email"
          {...register('email', {
            required: { value: true, message: 'This field is required' },
            minLength: { value: 3, message: 'Minimum 3 characters' },
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && <RequiredP>{errors.email.message}</RequiredP>}
        <div>
          <Label>{errors.password && <Span>*</Span>}Password:</Label>
        </div>
        <InputPassword
          type="password"
          placeholder="Password"
          {...register('password', {
            required: { value: true, message: 'This field is required' },
            minLength: { value: 8, message: 'Minimum 8 characters' },
          })}
        />
        {errors.password && <RequiredP>{errors.password.message}</RequiredP>}
        <LogInBtn name="Log in" type="submit">
          Log in
        </LogInBtn>
        <RegisterBtn name="Registration" type="submit">
          Registration
        </RegisterBtn>
      </Form>
    </FormWrapper>
  );
};

export default AuthForm;
