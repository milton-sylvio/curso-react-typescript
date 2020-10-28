import React from 'react';
import { Container } from './styles';

interface IDropdownProps {
  options: {
    value: string | number,
    label: string | number,
  }[],
}

const Dropdown: React.FC<IDropdownProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {
          options.map(option => (
          <option value={option.value}>{ option.label }</option>
          ))
        }
      </select>
    </Container>
  );
}

export default Dropdown;
