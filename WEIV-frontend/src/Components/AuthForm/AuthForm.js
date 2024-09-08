// src/Components/AuthForm/AuthForm.js

import React from 'react';

function AuthForm({ title, buttonText, onSubmit, children }) {
  return (
    <div className="auth-form-container">
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {children}
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}

export default AuthForm;
