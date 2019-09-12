import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/images/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail." />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta."
        />
        <button type="submit">Registrar</button>

        <Link to="/">Ja é cadastrado? Acesse sua conta</Link>
      </Form>
    </>
  );
}
