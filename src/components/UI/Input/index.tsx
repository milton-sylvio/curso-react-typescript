import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType;
  maskInput?: React.ComponentType;
  mask?: (string | RegExp)[];
}

const UiInput: React.FC<IInputProps> = ({ 
  icon: Icon, 
  maskInput: MaskInput,
  ...rest 
}) => { 
  const getIcon = Icon ? true : false;

  return (
    <Container showIcon={getIcon}>
      { Icon && <Icon /> }
      { !MaskInput ? <input { ...rest } /> : <MaskInput { ...rest } /> }
    </Container>
  )
};

export default UiInput;