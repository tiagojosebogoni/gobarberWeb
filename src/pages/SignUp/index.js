import React from 'react';
import {Link} from 'react-router-dom'

import logo from '../../assets/logo.svg'
// import { Container } from './styles';

export default function SigUp() {
  return (
  <>
    <img src={logo} alt="GoBarber"/>

    <form>
      <input placeholder="Nome Completo" />
      <input type="text" placeholder="Seu Email" />
      <input type="password" placeholder="Sua senha" />

      <button  type="submit">Criar Conta </button>

      <Link to="/" >Já tenho login </Link>
    </form>
  </>)
}
