import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk, registerThunk } from 'redux/thunks';
import { useForm } from 'react-hook-form';
import GoogleAuthButton from 'components/GoogleAuthBtn/GoogleAuthBtn';

import {
  Form,
  FormWrapper,
  // Img,
  InputEmail,
  InputPassword,
  Label,
  LogInBtn,
  Paragraph,
  RegisterBtn,
  RequiredP,
  Span,
  Title,
} from './AuthPage.styled';

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
    <FormWrapper>
      {/* <div>
        <Img src={money} alt="wallet"></Img>
      </div> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>You can log in with your Google Account:</Title>
        <GoogleAuthButton />
        <Paragraph>
          Or log in using an email and password, after registration{' '}
        </Paragraph>
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

export default Auth;
