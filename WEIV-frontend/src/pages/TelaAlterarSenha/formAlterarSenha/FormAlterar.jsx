import React from 'react'
import '../formAlterarSenha/FormAlterar.css'
import AlterarSenha from '../AlterarSenha';
import { useState } from 'react';

const FormAlterar = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validatePasswords = () => {
      if(newPassword !== confirmPassword) {
        setErrorMessage("As senhas não se coincidem")
        return false;
      }

      if(!currentPassword || !newPassword || !confirmPassword){
        setErrorMessage("Por favor preencha todos os campos!")
        return false;
      }

      if (newPassword.length < 8) {
        setErrorMessage('A nova senha deve ter pelo menos 8 caracteres');
        return false;
      }

      return true;
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if(!validatePasswords()){
      return;
    }

    try{

      await changePassword(currentPassword, newPassword);
      setSuccessMessage("Senha alterada com sucesso")
    }catch(error){
      setErrorMessage("Ocorreu um erro ao alterar a senha")
    }

  }

  const changePassword = async (currentPassword, newPassword) => {
    const response = await fetch('/api/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao alterar a senha, senha atual incorreta');
    }
  
    return response.json();
  };
  return (
    <div className='container'>
        <section className='usuario-container'>
            <div className='gestao-de-dados'>
                <h2>Alterar sua senha</h2>
                <br />
                <form onSubmit={handleSubmit}>

                    <label htmlFor="password">Digite sua nova senha:</label>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required/>

                    <label htmlFor="password">Repita sua nova senha:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>

                    <label htmlFor="password">Digite sua senha atual:</label>
                    <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required/>

                    {errorMessage && <p style={{color: 'red' }}>{errorMessage}</p>}
                    {successMessage && <p style={{color: 'green' }}>{successMessage}</p>}
                    <button type='submit' className='botao'>Alterar Senha</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default FormAlterar;