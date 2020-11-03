import React from 'react';
import { 
  Container,
  ToggleSwitchContainer,
  ToggleSwitchLabel,
  ToggleSwitchSpan,
  ToggleSwitchInput 
} from './styles';

interface IToggleSwitchProps {
  onColor: string;
  // labelLeft: string;
  // labelRight: string;
  checked: boolean;
  handleToggle(): void;
}

const ToggleSwitch: React.FC<IToggleSwitchProps> = ({ 
  checked, 
  handleToggle, 
  onColor 
}) => {
  // console.log('checked:', checked);
  // console.log('handleToggle:', handleToggle);
  // console.log('onColor:', onColor);

  return (
    <Container>
      <ToggleSwitchLabel>Light</ToggleSwitchLabel>
      <ToggleSwitchContainer className="switch">
        <ToggleSwitchInput 
          type="checkbox" 
          checked={checked}
          onChange={handleToggle}
        />
        <ToggleSwitchSpan className="switch-slider round" />
      </ToggleSwitchContainer>
      <ToggleSwitchLabel>Dark</ToggleSwitchLabel>
    </Container>
  );
}

export default ToggleSwitch;
