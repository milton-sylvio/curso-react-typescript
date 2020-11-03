import styled from 'styled-components';
import { lighten, rgba } from 'polished';

export const Container = styled.div`
  > select {
    background-color: ${ props => props.theme.colors.secondary };
    border: 1px solid ${ props => lighten(0.2, props.theme.colors.secondary) };
    cursor: pointer;
    color: ${ props => props.theme.colors.white };
    padding: 5px 10px;
    border-radius: 2px;
    margin-left: 10px;

    &:focus {
      box-shadow: 0 0 0 0.2rem ${ props => rgba(props.theme.colors.secondary, 0.85) };
    }
  }
`;