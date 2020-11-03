import React from 'react';

import happyIcon from '../../assets/happy.svg';

import { Container } from './styles';

const MessageCard: React.FC = () => {
  return (
    <Container>
      <header>
        <h2>
          Muito bem! 
          <img src={happyIcon} alt=""/>
        </h2>
        <h3>Sua carteira está positiva!</h3>
      </header>
      <footer>
        <small>Continue assim. Considere investir o seu saldo.</small>
      </footer>
    </Container>
  );
}

export default MessageCard;