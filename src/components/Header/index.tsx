import React, { useMemo, useState } from 'react';

import {
  MdMenu,
  MdClose
} from 'react-icons/md';

import emojiList from '../../utils/emojis';

import { useTheme } from '../../hooks/theme';
import { useMenuMobile } from '../../hooks/menu';

import Logo from '../Logo';

import { 
  Container,
  Profile,
  Welcome,
  UserName,
  Emojis,
  MenuMobile,
  Toggle,
  ContainerActionsMobile
} from './styles';

const Header: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojiList.length);
    return emojiList[index]
  }, []);

  const { handleToggleMenu, toggleMenu } = useMenuMobile();
  
  const { toggleTheme, theme } = useTheme();
  const [ getTheme, setTheme ] = useState(() => theme.mode === 'dark' ? true : false);
  
  const handleChangeTheme = () => {
    setTheme(!getTheme);
    toggleTheme();
  }

  return (
    <Container>
      <ContainerActionsMobile>
        <Logo />
        
        <MenuMobile 
          onClick={handleToggleMenu} 
          className={toggleMenu ? 'open' : ''} 
          type="button"
        >
          { toggleMenu ? <MdClose className="icon-close" /> : <MdMenu className="icon-menu" /> }          
        </MenuMobile>
      </ContainerActionsMobile>

      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={getTheme}
        className="header"
        onChange={handleChangeTheme} 
      />

      <Profile>
        <Emojis>{emoji}</Emojis>

        <Welcome>
          Olá, 
          <UserName>Milton Sylvio</UserName>
        </Welcome>
      </Profile>
    </Container>
  );
}

export default Header;
