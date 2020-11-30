import React from 'react';
import ContentHeader from '../../components/ContentHeader';

import { Container } from './styles';

const NewRegister: React.FC  = () => {
  return (
    <Container>
      <ContentHeader title="Novo Registro" />
    </Container>
  );
};

export default NewRegister;