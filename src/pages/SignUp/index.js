import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira seu e-mail')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('Senha é obrigaória'),
});

export default function SigUp() {
  function handleSubmit() {}

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="text" placeholder="Seu Email" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar Conta </button>

        <Link to="/">Já tenho login </Link>
      </Form>
    </>
  );
}
