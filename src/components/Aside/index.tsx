import React from 'react';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';

import Logo from '../Logo';

import { useAuth } from '../../hooks/auth';

import { 
  Container, 
  Header, 
  MenuContainer, 
  MenuItem,
  MenuTitle
} from './styles';

const Aside: React.FC = () => {
  const menu = [
    {
      path: '/',
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
  ];

  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <Logo />
      </Header>

      <MenuContainer>
        <MenuTitle>Menu</MenuTitle>
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
        <MenuItem
          title="Sair"
          onClick={signOut}
        >
          <MdExitToApp />
          Sair
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}

export default Aside;