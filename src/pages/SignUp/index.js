import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <form action="">
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail." />
        <input type="password" placeholder="Sua senha secreta." />
        <button type="submit">Registrar</button>

        <Link to="/">Ja é cadastrado? Acesse sua conta</Link>
      </form>
    </>
  );
}
