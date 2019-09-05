import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu Email" />

        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha antiga"
        />
        <Input type="password" name="password" placeholder="Nova Senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirma nova senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button">Sair</button>
    </Container>
  );
}
