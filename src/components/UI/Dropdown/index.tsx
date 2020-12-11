import React from 'react';
import { Container } from './styles';

interface IDropdownProps {
  options: {
    value: string | number,
    label: string | number,
  }[],
  defaultValue?: string | number;
  id?: string;
  required?: boolean;
  onChange(envent: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}

const Dropdown: React.FC<IDropdownProps> = ({ 
  options, 
  id, 
  required,
  defaultValue,
  onChange, 
}) => (
  <Container
      id={id}
      onChange={onChange}
      defaultValue={defaultValue}
      required={required}
      className="dropdown"
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
  </Container>
);

export default Dropdown;
