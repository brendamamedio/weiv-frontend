import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        background-image: url('/img/eventos.png');
        background-size: cover;          /* Faz a imagem cobrir todo o container */
        background-position: center;     /* Centraliza a imagem no container */
        background-repeat: no-repeat;    /* Evita que a imagem se repita */
    }
    .container1 {
        width: 50%;
        height: 100vh;
        display: flex;
        align-items: center;
        margin: auto;
        flex-direction: column;
        justify-content: center;
    }
    .container2 {
        width: 50%;
        display: flex;
        align-items: center;
        margin: auto;
        background: #0C0A40;
        height: 100vh;
        //justify-content: center;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100vh;
    align-items: center;
    margin: auto;
    
`;

// Estilize o campo de entrada
export const InputWrapper = styled.div`
    position: relative;
    width: 360px; /* Ajuste conforme necessário */
    height: 55px;
    background-color: #1b185dbd; /* Cor de fundo */
    margin-bottom: 25px;
    display: flex;
    align-items: center;

    .input {
        width: 100%;
        height: 100%;
        padding: 0 0 0 60px; /* Ajuste o padding para dar espaço ao ícone */
        background: none;
        border: none;
        color: #ffffff;
        font-size: 15px;
        font-family: "Poppins-Regular", Helvetica, sans-serif;
        outline: none;
        box-sizing: border-box; /* Inclua padding e border na largura e altura total */
        text-align: left; /* Alinhe o texto à esquerda */
        line-height: 55px; /* Ajuste conforme a altura do InputWrapper */
    }

    .css-10botns-MuiInputBase-input-MuiFilledInput-input {
        padding-bottom: 25px;
    }

    .icon {
        position: absolute;
        left: 20px; /* Ajuste conforme necessário */
        width: 20px; /* Ajuste conforme necessário */
        height: 20px; /* Ajuste conforme necessário */
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff; /* Cor do ícone */
    }
`;
export const Logo = styled.div`
    margin: 90px 0 30px 85px;
    font-size: 3rem;
    color: #F20574;
    font-weight: 600;
`;
export const ForgotPassword = styled.div`
    width: 100%; /* Faz com que o elemento ocupe toda a largura do InputWrapper */
    text-align: left; /* Alinha o texto à esquerda */
    margin-top: -15px; /* Ajuste conforme necessário para aproximar do campo de input */
    margin-bottom: 25px; /* Adiciona espaçamento abaixo */
`;
export const Slogan = styled.div`
    text-align: center;
    margin-bottom: 20px;

    h1 {
        font-size: 3rem;
        color: #ffffff;
        margin-bottom: 25px;
        font-family: 'Poppins-Bold', Helvetica, sans-serif;
    }

    p {
        font-size: 1.1rem;
        color: #ffffff;
        margin: 0 15px;
    }
`;