import React, { useMemo } from 'react';
import { Container, Profile, Welcome, UserName, Emojis } from './styles';
import Toggle from '../Toggle';
import emojiList from '../../utils/emojis';
 
const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojiList.length);
    return emojiList[index]
  }, []);

  return (
    <Container>
      <Toggle />

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