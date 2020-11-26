import React, { useMemo, useState } from 'react';

import ToggleSwitch from '../UI/ToggleSwitch';
import emojiList from '../../utils/emojis';

import { useTheme } from '../../hooks/theme';

import { 
  Container,
  Profile,
  Welcome,
  UserName,
  Emojis 
} from './styles';

const Header: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojiList.length);
    return emojiList[index]
  }, []);

  const { toggleTheme, theme } = useTheme();
  const [ getTheme, setTheme ] = useState(() => theme.mode === 'dark' ? true : false);
  
  const handleChangeTheme = () => {
    setTheme(!getTheme);
    toggleTheme();
  }
  
  return (
    <Container>
      <ToggleSwitch
        labelLeft="Light"
        labelRight="Dark"
        checked={getTheme}
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
