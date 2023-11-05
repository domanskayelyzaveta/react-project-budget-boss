import React from 'react';
import {
  Button,
  Container,
  Paragraph,
  Svg,
  Title,
} from './GoogleAuthBtn.styled';
import sprite from '../../images/sprite.svg';

// 'https://kapusta-backend.p.goit.global/auth/google';

const GoogleAuthButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'https://kapusta-backend.goit.global/auth/google';
  };

  return (
    <>
      <Title>You can log in with your Google Account:</Title>
      <Container>
        <Button type="button" onClick={handleGoogleLogin}>
          <Svg width="18" height="17">
            <use href={`${sprite}#icon-google-symbol`} />
          </Svg>
          Google
        </Button>
      </Container>
      <Paragraph>
        Or log in using an email and password, after registration{' '}
      </Paragraph>
    </>
  );
};

export default GoogleAuthButton;
