import React from 'react';
import { Button } from '../Shared/Button';
import { Container, Form, InputWrapper, Logo, ForgotPassword, Slogan } from '../../Style/FormStyles';
import UserIcon from '../../assets/img/icon/user.png'; 
import PasswordIcon from '../../assets/img/icon/Key.png';
import FilledInput from "@mui/material/FilledInput";
import EmailIcon from '../../assets/img/icon/Vector.png';
import PhoneIcon from "../../assets/img/icon/Phone.png";

const Register = ({ onRegister }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para registrar o usuário
    onRegister(); // Chama a função de registro do App
  };

  return (
    <Container>
      <div className="container">
        <div className='container1'>
          <Slogan>
            <h1>Descubra, Conecte-se, Participe: </h1>
            <p>O portal de eventos que transforma sua agenda em experiências inesquecíveis!</p>
          </Slogan>
          <Button isPrimary>
            <a href="/">Conectar</a>
          </Button>
        </div>
        <div className='container2'>
          <Form onSubmit={handleSubmit}>
            <Logo>Cadastre-Se</Logo>
            <InputWrapper>
              <div className="icon">
                <img src={UserIcon} alt="User Icon" />
              </div>
              <FilledInput
                id="input-user-name"
                className="input"
                placeholder="Usuário"
              />
            </InputWrapper>
            <InputWrapper>
              <div className="icon">
                <img src={EmailIcon} alt="Email Icon" />
              </div>
              <FilledInput
                id="input-email"
                className="input"
                type='email'
                placeholder="Email"
              />
            </InputWrapper>
            <InputWrapper>
              <div className="icon">
                <img src={PhoneIcon} alt="Phone Icon" />
              </div>
              <FilledInput
                id="input-phone"
                className="input"
                type='phone'
                placeholder="Telefone"
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
              />
            </InputWrapper>
            <ForgotPassword>
              <a href="/forgot-password">Esqueceu sua senha?</a>
            </ForgotPassword>
            <Button style={{ backgroundColor: '#f20574', border: 'none' }} type="submit">
              Cadastrar
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Register;
