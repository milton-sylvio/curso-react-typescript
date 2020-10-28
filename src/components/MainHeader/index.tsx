import React, { useMemo, useState } from 'react';
import { Container, Profile, Welcome, UserName, Emojis } from './styles';
import Switch from '../Switch';
import emojiList from '../../utils/emojis';
 
const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojiList.length);
    return emojiList[index]
  }, []);

  const [value, setValue] = useState(() => { 
    return false
  });
  // const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

  return (
    <Container>
      <Switch
        checked={value}
        onColor="#EF476F"
        handleToggle={() => setValue(!value)} 
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

export default MainHeader;
