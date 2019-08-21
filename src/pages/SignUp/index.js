import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';

export default function SigUp() {
  function handleSubmit() {}

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="text" placeholder="Seu Email" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar Conta </button>

        <Link to="/">Já tenho login </Link>
      </Form>
    </>
  );
}
