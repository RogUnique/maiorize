import { Button } from '@material-ui/core';
import React from 'react';
import { LoginPageContainer } from './styled';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <h1>Login</h1>
      <p>usr</p>
      <p>senha</p>
      <Button variant="contained" color="primary">
        Login
      </Button>
      <Button variant="contained" color="primary">
        Cadastre-se
      </Button>
    </LoginPageContainer>
  );
};

export default LoginPage;
