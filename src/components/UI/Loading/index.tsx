import React from 'react';

import { 
  Container,
  Content,
  Title,
  BarLoading
} from './styles';

const Loading: React.FC = () => {

  return (
    <Container>
      <Content>
        <Title>Carregando...</Title>
        <BarLoading />
      </Content>
    </Container>
  )
};

export default Loading;
