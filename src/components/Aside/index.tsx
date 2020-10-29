import React from 'react';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';
import { 
  Container, 
  Header, 
  Logo, 
  Title,
  MenuContainer, 
  MenuItem 
} from './styles';
import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItem href="/dashboard" title="Dashboard">
          <MdDashboard />
          Dashboard
        </MenuItem>
        <MenuItem href="/list/entry" title="Entradas">
          <MdArrowUpward />
          Entradas
        </MenuItem>
        <MenuItem href="/list/outputs" title="Saídas">
          <MdArrowDownward />
          Saídas
        </MenuItem>
        <MenuItem href="#" title="Sair">
          <MdExitToApp />
          Sair
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}

export default Aside;