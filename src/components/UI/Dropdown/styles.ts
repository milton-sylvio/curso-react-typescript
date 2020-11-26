import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  > select {
    background-color: ${ props => props.theme.input.bg };
    border: 1px solid ${ props => props.theme.input.borderColor };
    border-radius: ${ props => props.theme.general.bordersRadius.normal };
    color: ${ props => props.theme.textColor };
    cursor: pointer;
    margin-left: 8px;
    padding: 4px 8px;

    &:focus {
      border-color: ${ props => props.theme.general.colors.primary };
      box-shadow: 0 0 0 0.2rem ${ props => rgba(props.theme.general.colors.primary, 0.25) };
    }
  }
`;