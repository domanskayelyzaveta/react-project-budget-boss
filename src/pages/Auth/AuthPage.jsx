import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
// import { selectId } from 'redux/selectors';
import { loginThunk, registerThunk } from 'redux/thunks';
// import { fetchLogin, fetchRegister } from 'service/Api';

const Auth = () => {
  const [inputPassword, setInputPassword] = useState('');
  const [inputEmaill, setInputEmaill] = useState('');
  // const responsId = useSelector(selectId);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // console.dir(e.currentTarget);
    // console.log(e.submitter.name);
    const form = e.currentTarget;

    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    const submit = e.nativeEvent.submitter.name;
    console.log(submit);

    if (inputPassword && inputEmaill) {
      submit === 'Log in'
        ? dispatch(loginThunk(userData))
        : dispatch(registerThunk(userData))
            .unwrap()
            .then(() => {
              dispatch(loginThunk(userData));
              form.reset();
            });
    }
  };

  const userPassword = e => {
    const inputValue = e.target.value;
    setInputPassword(inputValue);
  };

  const userEmaill = e => {
    const inputValue = e.target.value;
    setInputEmaill(inputValue);
  };

  // useEffect(() => {
  //   dispatch(loginThunk({ email: inputEmaill, password: inputPassword }));
  // }, [responsId, dispatch]);

  return (
    <div>
      AuthForm
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          onChange={userEmaill}
          type="email"
          name="email"
          placeholder="your@email.com"
          //   value={email}
        />
        <label>Password:</label>
        <input
          onChange={userPassword}
          type="password"
          name="password"
          placeholder="Password"
          //   value={password}
        />
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
