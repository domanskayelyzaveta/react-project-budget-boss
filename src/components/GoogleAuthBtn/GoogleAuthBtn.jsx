import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
import { Button, Container } from './GoogleAuthBtn.styled';

const GoogleAuthButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'https://kapusta-backend.p.goit.global/auth/google';
  };

  return (
    <Container>
      <Button type="button" onClick={handleGoogleLogin}>
        Google
      </Button>
      {/* <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      >
        Google Login
      </GoogleLogin> */}
    </Container>
  );
};

export default GoogleAuthButton;

//-----------внутри кнопки---------------//
// import { useGoogleLogin } from '@react-oauth/google'; // Подключите необходимую библиотеку

// const GoogleAuthButton = () => {
//   const { login } = useGoogleLogin({
//     onSuccess: tokenResponse => {
//       console.log(tokenResponse);
//     },
//   });

//   return (
//     <div>
//       <Button onClick={() => login()}>Войти с помощью Google</Button>
//     </div>
//   );
// };

// export default GoogleAuthButton;

//-------- базовый вариант -----------//
// const GoogleAuthButton = () => {
//   return (
//     <div>
//       <GoogleLogin
//         onSuccess={credentialResponse => {
//           console.log(credentialResponse);
//         }}
//         onError={() => {
//           console.log('Login Failed');
//         }}
//       />
//     </div>
//   );
// };
