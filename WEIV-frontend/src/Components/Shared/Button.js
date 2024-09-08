import styled from "styled-components";

export const Button = styled.button.attrs(props => ({
  // Filtra a prop isPrimary para que ela não seja passada ao DOM
  isPrimary: undefined,
}))`
  width: 180px;
  height: 40px;
  background-color: ${({ isPrimary }) => (isPrimary ? '#f20574' : 'transparent')}; /* Cor baseada na prop */
  border-radius: 40px;
  border: ${({ isPrimary }) => (isPrimary ? 'none' : '3px solid white')}; /* Borda baseada na prop */
  display: flex; 
  justify-content: center; 
  align-items: center; 
  cursor: pointer;
  transition: background-color 0.3s;

  font-family: "Poppins-Bold", Helvetica, sans-serif;
  font-weight: 700;
  color: #ffffff;
  font-size: 1.1rem;
  text-align: center;
  
  &:hover {
    background-color: ${({ isPrimary }) => (isPrimary ? '#d9046b' : 'rgba(255, 255, 255, 0.1)')}; /* Cor do hover baseada na prop */
  }

  a {
    font-family: "Poppins-Bold", Helvetica, sans-serif;
    font-weight: 700;
    color: #ffffff;
    font-size: 1.1rem;
    text-align: center;
    text-decoration: none;
    line-height: normal;
    z-index: 2; /* Certifique-se de que o texto fique acima da borda */
  }
`;
