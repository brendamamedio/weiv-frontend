import styled from "styled-components";

export const Linha = styled.div`
    display: flex; /* Usando flexbox para alinhar os elementos */
    align-items: center; /* Alinha verticalmente os elementos */
    justify-content: center; /* Centraliza os elementos horizontalmente */
    width: 70%; /* Ocupa toda a largura do container pai */
    margin: 20px 0; /* Ajustei o valor para cima e para baixo */
    text-align: center; /* Centraliza os elementos dentro da linha */
`;

export const Line = styled.div`
    flex-grow: 1; /* Faz com que as linhas cresçam para ocupar o espaço disponível */
    height: 1px;
    background-color: #000;
`;

export const TextWrapper = styled.div`
    margin: 0 15px; /* Espaçamento ao redor do texto "ou" */
    font-family: "Poppins-Regular", Helvetica;
    font-weight: 400;
    color: #ffffff;
    font-size: 1rem;
    letter-spacing: 0;
    line-height: normal;
`;
