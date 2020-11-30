import React, { useState } from 'react';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdNoteAdd
} from 'react-icons/md';

import Logo from '../Logo';

import { useAuth } from '../../hooks/auth';
import { useMenuMobile } from '../../hooks/menu';

import { 
  Container, 
  Header, 
  MenuContainer, 
  MenuItem,
  MenuTitle,
  Toggle
} from './styles';

import { useTheme } from '../../hooks/theme';

const Aside: React.FC = () => {
  const menu = [
    {
      path: '/',
      text: 'Dashboard',
      icon: <MdDashboard />,
    }, 
    {
      path: '/new-register',
      text: 'Novo registro',
      icon: <MdNoteAdd />,
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

  const { toggleTheme, theme } = useTheme();
  const [ getTheme, setTheme ] = useState(() => theme.mode === 'dark' ? true : false);
  const { toggleMenu } = useMenuMobile();

  const handleChangeTheme = () => {
    setTheme(!getTheme);
    toggleTheme();
  }

  return (
    <Container menuIsOpen={toggleMenu}>
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

      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={getTheme}
        className="header"
        onChange={handleChangeTheme} 
      />

    </Container>
  );
}

export default Aside;