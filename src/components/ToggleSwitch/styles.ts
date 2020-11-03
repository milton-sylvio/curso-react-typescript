import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleSwitchLabel = styled.span`
  color: ${ props => props.theme.colors.white };
`;

export const ToggleSwitchContainer = styled.label`
  display: inline-block;
  height: 20px;
  margin: 0 10px;
  position: relative;
  width: 60px;

  > input {
    height: 0;
    opacity: 0;
    width: 0;
  }
`;

export const ToggleSwitchSpan = styled.span`
  background-color: ${ props => props.theme.colors.info };
  border-radius: 26px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;

  &:before {
    background-color: ${ props => props.theme.colors.white };
    border-radius: 50%;
    bottom: -3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
    content: "";
    height: 26px;
    left: 2px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }
`;

export const ToggleSwitchInput = styled.input`
  &:checked + .switch-slider {
    background-color: ${ props => props.theme.colors.warning };

    &:before {
      transform: translateX(30px);
    }
  }
`;
