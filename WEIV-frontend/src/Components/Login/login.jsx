import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Shared/Button';
import { Container, Form, InputWrapper, ForgotPassword, Logo, Slogan } from '../../Style/FormStyles';
import UserIcon from '../../assets/img/icon/user.png'; 
import PasswordIcon from '../../assets/img/icon/Key.png';
import FilledInput from "@mui/material/FilledInput";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de autenticação
    onLogin();
  };

  return (
    <Container>
      <div className="container">
        <div className='container1'>
          <Slogan>
            <h1>Descubra, Conecte-se, Participe:</h1>
            <p>O portal de eventos que transforma sua agenda em experiências inesquecíveis!</p>
          </Slogan>
          <Button isPrimary>
            <Link to="/register">Cadastrar</Link>
          </Button>
        </div>
        <div className='container2'>
          <Form onSubmit={handleSubmit}>
            <Logo>Conecte-Se</Logo>
            <InputWrapper>
              <div className="icon">
                <img src={UserIcon} alt="User Icon" />
              </div>
              <FilledInput
                id="input-user-name"
                className="input"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <div className="icon">
                <img src={PasswordIcon} alt="Password Icon" />
              </div>
              <FilledInput
                id="input-password"
                className="input"
                type='password'
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputWrapper>
            <ForgotPassword>
              <Link to="/forgot-password">Esqueceu sua senha?</Link>
            </ForgotPassword>
            <Button style={{ backgroundColor: '#f20574', border: 'none' }} type="submit">
              Conectar
            </Button>
            <p><Link to="/register">Ainda não possui uma conta?</Link></p>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Login;
