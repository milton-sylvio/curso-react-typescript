import React from 'react';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

import { 
  Container, 
  Header, 
  Logo, 
  Title,
  MenuContainer, 
  MenuItem 
} from './styles';

const Aside: React.FC = () => {
  const menu = [
    {
      path: '/dashboard',
      text: 'Dashboard',
      icon: <MdDashboard />,
    }, 
    {
      path: '/list/entry',
      text: 'Entradas',
      icon: <MdArrowUpward />,
    }, 
    {
      path: '/list/outputs',
      text: 'Saídas',
      icon: <MdArrowDownward />,
    },
    {
      path: '#',
      text: 'Sair',
      icon: <MdExitToApp />,
    },
  ];


  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha <strong>Carteira</strong></Title>
      </Header>

      <MenuContainer>
        {
          menu.map(item => (
            <MenuItem 
              key={item.path}
              href={item.path} 
              className={
                window.location.pathname === item.path
                ? 'actived'
                : ''
              }
              title={item.text}>
              { item.icon }
              {item.text}
            </MenuItem>
          ))
        }
      </MenuContainer>
    </Container>
  );
}

export default Aside;