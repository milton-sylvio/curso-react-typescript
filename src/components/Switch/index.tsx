import React from 'react';
import { 
  SwitchContainer,
  SwitchLabel,
  SwitchSpan,
  SwitchInput 
} from './styles';

interface ISwitchProps {
  onColor: string;
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  handleToggle(): void;
}

const Switch: React.FC<ISwitchProps> = ({ 
  checked, 
  handleToggle, 
  onColor 
}) => {
  console.log('checked:', checked);
  console.log('handleToggle:', handleToggle);
  console.log('onColor:', onColor);

  return (
    <SwitchContainer>
      <SwitchInput 
        checked={checked}
        onChange={e => handleToggle(e.target.checked)}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <SwitchLabel className="react-switch-label" style={{ backgroundColor: checked && onColor }}>
        <SwitchSpan className="react-switch-button" />
      </SwitchLabel>
    </SwitchContainer>
  );
}

export default Switch;
