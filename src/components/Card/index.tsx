import React from 'react';
import { Container } from './styles';

const Card: React.FC = ({ children }) => {
  return (
    <Container className="card">
      { children }
    </Container>
  );
}

export default Card;