import GoogleAuthButton from 'components/GoogleAuthBtn/GoogleAuthBtn';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk, registerThunk } from 'redux/thunks';
import money from '../../images/desktop/money-desktop-1x.webp';
import {
  Form,
  FormWrapper,
  Img,
  InputEmail,
  InputPassword,
  Label,
  LogInBtn,
  RegisterBtn,
  RequiredP,
  Span,
} from './AuthForm.styled';

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
            .unwrap()
            .then(() => {
              toast.success('Login successful');
            })
            .catch(error => {
              toast.error('Registration failed: ' + error.message);
            })
        : dispatch(registerThunk(data))
            .unwrap()
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
    <div>
      <FormWrapper>
        <Img src={money} alt=""></Img>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <GoogleAuthButton />
          <div>
            <Label>{errors.email && <Span>*</Span>}Email:</Label>
      
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
          </div>
          <div>
            <Label>{errors.password && <Span>*</Span>}Password:</Label>
      
          <InputPassword
            type="password"
            placeholder="Password"
            {...register('password', {
              required: { value: true, message: 'This field is required' },
              minLength: { value: 8, message: 'Minimum 8 characters' },
            })}
          />
          {errors.password && <RequiredP>{errors.password.message}</RequiredP>}
          </div>
          <LogInBtn name="Log in" type="submit">
            Log in
          </LogInBtn>
          <RegisterBtn name="Registration" type="submit">
            Registration
          </RegisterBtn>
        </Form>
      </FormWrapper>
    </div>
  );
};

export default AuthForm;
