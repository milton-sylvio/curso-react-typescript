import styled from 'styled-components';
import { darken, rgba } from 'polished';

export const Container = styled.button`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  background-color: ${ props => props.theme.general.colors.primary };
  border-radius: ${ props => props.theme.general.bordersRadius.normal };
  border: 1px solid transparent;
  box-shadow: 0 0 5px .2rem ${ props => rgba(props.theme.general.colors.primary, .35) };
  color: ${ props => props.theme.general.colors.white };
  display: inline-block;
  font-size: ${ props => props.theme.general.fontSizes[2] };
  font-weight: ${ props => props.theme.general.fontWeights.normal };
  line-height: 1.5;
  padding: ${ props => props.theme.general.space[2] } ${ props => props.theme.general.space[5] };
  text-align: center;
  transition: all .15s ease-in-out;
  user-select: none;
  vertical-align: middle;

  &:hover {
    background-color: ${ props => darken(0.05, props.theme.general.colors.primary) };
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem ${ props => rgba(props.theme.general.colors.primary, .5) };
  }

  &.block {
    text-align: center;
    width: 100%;
  }

  &.outline {
    background-color: transparent;
    border-color: ${ props => props.theme.general.colors.primary };
    color: ${ props => props.theme.general.colors.primary };

    &:hover,
    &:focus {
      background-color: ${ props => props.theme.general.colors.primary};
      color: ${ props => props.theme.general.colors.white };
    }
  }
`;
