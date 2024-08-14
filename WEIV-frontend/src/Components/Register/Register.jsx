import React from 'react';
import { Container, Form, InputWrapper, Logo, ForgotPassword, Slogan } from "./Login/Login";
import UserIcon from '/img/icon/user.png'; 
import PasswordIcon from '/img/icon/Key.png'; 
import FilledInput from "@mui/material/FilledInput";
import { Link } from '../Shared/Link';
import { Button } from '../Shared/Button';
import { SocialIcons } from '../Shared/SocialIcons';
import { Linha, Line, TextWrapper } from "../Shared/Line";
//import { Slogan } from '../Shared/Slogan';

const Register = () => {
  return (
    <Container>
        <div className="container">
            <div className='container1'>
            <Slogan>
              <h1>Descubra, Conecte-se, Participe:</h1>
              <p>O portal de eventos que transforma sua agenda em experiências inesquecíveis!</p>
            </Slogan>
              <Button>
                <Link href="../index.html">Conectar</Link>
              </Button>
            </div>
            <div className='container2'>
              <Form>
                <Logo>Cadastre-Se</Logo>
                <InputWrapper>
                  <div className="icon">
                    <img src={UserIcon} alt="User Icon" />
                  </div>
                  <FilledInput
                    id="filled-adornment-weight"
                    className="input"
                    placeholder="Usuário"
                  />
                </InputWrapper>
                <InputWrapper>
                  <div className="icon">
                    <img src={PasswordIcon} alt="Password Icon" />
                  </div>
                  <FilledInput
                    id="filled-adornment-weight"
                    className="input"
                    type='password'
                    placeholder="Senha"
                  />
                </InputWrapper>
                <ForgotPassword>
                  <Link href="">Esqueceu sua senha?</Link>
                </ForgotPassword>
                <Button isPrimary>
                  <Link href="">Conectar</Link>
                </Button>
                <Linha>
                  <Line />
                  <TextWrapper>ou</TextWrapper>
                  <Line />
                </Linha>
                <SocialIcons>
                    <img src="/img/icon/Facebook.png" alt="Facebook" />
                    <img src="/img/icon/Google.png" alt="Google" />
                    <img src="/img/icon/TwitterX.png" alt="TwitterX" />
                </SocialIcons>
                <p><Link href="../index.html">Ainda não possui uma conta?</Link></p>
              </Form>
            </div>
        </div>
    </Container >
  );
}

export default Register;
