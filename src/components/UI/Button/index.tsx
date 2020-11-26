import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
}

const UiButton: React.FC<IButtonProps> = ({icon, children, ...rest }) => (
  <Container { ...rest }>
      <img src={icon} alt="" />
      {children}
  </Container>
);

export default UiButton;