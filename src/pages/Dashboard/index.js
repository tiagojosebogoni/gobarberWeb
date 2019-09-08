import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import api from '../../services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>31 de maio</strong>
        <button>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>
      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Tiago Bogoni</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em Aberto</span>
        </Time>
        <Time available>
          <strong>10:00</strong>
          <span>Em Aberto</span>
        </Time>
        <Time available>
          <strong>11:00</strong>
          <span>Em Aberto</span>
        </Time>
      </ul>
    </Container>
  );
}
