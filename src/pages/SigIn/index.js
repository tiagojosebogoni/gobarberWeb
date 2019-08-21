import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';
// import { Container } from './styles';

export default function SigIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form>
        <Input name="email" type="text" placeholder="Seu Email" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Acessar </button>

        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
