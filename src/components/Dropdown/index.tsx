import React from 'react';
import { Container } from './styles';

interface IDropdownProps {
  options: {
    value: string | number,
    label: string | number,
  }[],
  onChange(envent: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

const Dropdown: React.FC<IDropdownProps> = ({ 
  options, 
  onChange, 
  defaultValue 
}) => {
  return (
    <Container>
      <select 
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {
          options.map(option => (
          <option 
            key={option.value}
            value={option.value}
          >
            { option.label }
          </option>
          ))
        }
      </select>
    </Container>
  );
}

export default Dropdown;
