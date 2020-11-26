import React from 'react';
import { 
  Container,
  ToggleSwitchContainer,
  ToggleSwitchLabel,
  ToggleSwitchSpan,
  ToggleSwitchInput 
} from './styles';

interface IToggleSwitchProps {
  checked: boolean;
  labelLeft: string;
  labelRight: string;
  onChange(): void;
}

const ToggleSwitch: React.FC<IToggleSwitchProps> = ({ 
  checked, 
  labelLeft,
  labelRight,
  onChange, 
}) => {
  // console.log('checked:', checked);
  
  return (
  <Container>
    <ToggleSwitchLabel>
      { labelLeft }
    </ToggleSwitchLabel>

    <ToggleSwitchContainer className="switch">
      <ToggleSwitchInput 
        type="checkbox" 
        checked={checked}
        onChange={onChange}
      />
      <ToggleSwitchSpan className="switch-slider" />
    </ToggleSwitchContainer>

    <ToggleSwitchLabel>
      { labelRight }
    </ToggleSwitchLabel>
  </Container>
)};

export default ToggleSwitch;
