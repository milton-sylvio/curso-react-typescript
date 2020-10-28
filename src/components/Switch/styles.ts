import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitchLabel = styled.label`
  align-items: center;
  background-color: ${ props => props.theme.colors.info };
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 20px;
  justify-content: space-between;
  position: relative;
  transition: background-color .2s;
  width: 60px;

  .react-switch-button {
    background-color: ${ props => props.theme.colors.white };
    border-radius: 25px;
    box-shadow: 0 0 3px 0 rgba(10, 10, 10, 0.30);
    content: '';
    height: 26px;
    left: 2px;
    position: absolute;
    top: -2px;
    transition: 0.2s;
    width: 26px;
  }

  &:active .react-switch-button {
    width: 30px;
  }
`;

export const SwitchSpan = styled.span`
  /* background-color: ${ props => props.theme.colors.white };
  border-radius: 45px;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  content: '';
  height: 45px;
  left: 2px;
  position: absolute;
  top: 2px;
  transition: 0.2s;
  width: 45px; */
`;

export const SwitchInput = styled.input`
  height: 0;
  visibility: hidden;
  width: 0;

  &:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
