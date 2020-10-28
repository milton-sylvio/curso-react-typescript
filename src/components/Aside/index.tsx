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
        <MenuItem href="#" title="Dashboard">
          <MdDashboard />
          Dashboard
        </MenuItem>
        <MenuItem href="#">
          <MdArrowUpward />
          Entradas
        </MenuItem>
        <MenuItem href="#">
          <MdArrowDownward />
          Saídas
        </MenuItem>
        <MenuItem href="#">
          <MdExitToApp />
          Sair
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}

export default Aside;