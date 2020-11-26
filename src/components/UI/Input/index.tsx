import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType;
}

const UiInput: React.FC<IInputProps> = ({icon: Icon, ...rest }) => (
  <Container>
    <Icon />
    <input { ...rest } />
  </Container>
);

export default UiInput;